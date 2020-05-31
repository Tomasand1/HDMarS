import statistics
import urllib.request
from math import floor

import matplotlib.pyplot as plt
import matplotlib
from pandas import np

from skimage import data, io, filters
from skimage.color import rgb2gray

from src.music_processor.process_music import meditation, study, funky

matplotlib.rcParams['font.size'] = 18

image = io.imread('../api/picture_out.png')


def process_image_grey():
    # for name in images:
    # caller = getattr(data, "hubble_deep_field")
    # image = caller()
    print(len(image[0]))
    # cropped_image = image[0:100, 0:100]
    # image = gaussian(image, 10)

    plt.figure()
    plt.title("cell")
    if image.ndim == 2:
        plt.imshow(image, cmap=plt.cm.gray)
    else:
        plt.imshow(image)

    # plt.show()

    return rgb2gray(image)


def process_image(img=None):
    img = np.array(img)
    img = rgb2gray(img)
    print(len(img[0, :]))
    meditation(img[0, :])


def handle_time(time):
    if str.lower(time) == "one minute":
        return 60
    elif str.lower(time) == "five minutes":
        return 60 * 5
    else:
        return 60*7


def handle_intensity(intensity):
    if str.lower(intensity) == "fast":
        return 0.125, 2
    elif str.lower(intensity) == "medium":
        return 1, 1
    else:
        return 6, 0.7


def process_image_download(url, med_type, intensity, time):
    urllib.request.urlretrieve(url, 'assets/new_image.jpg')

    img = io.imread("../api/assets/new_image.jpg")

    time = handle_time(time)
    print(intensity)
    intensity = handle_intensity(intensity)

    img = rgb2gray(img)
    print(img)
    average_arr = []
    mean = 0
    img_length = len((img[0, :]))
    img_length = floor(img_length / time) * time
    print(img_length)
    for i in range(img_length):
        mean = statistics.mean([mean, statistics.mean(img[:, i])])
        if i % floor(img_length / time) == 0:
            average_arr.append(mean)
            mean = 0
    print(len(average_arr))

    print(average_arr)
    if str.lower(med_type) == "meditate":
        meditation(average_arr, intensity)
    elif str.lower(med_type) == "focus":
        study(average_arr, intensity)
    else:
        funky(average_arr, intensity)

