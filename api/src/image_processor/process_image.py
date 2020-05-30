import urllib.request

import matplotlib.pyplot as plt
import matplotlib
from pandas import np

from skimage import data, io, filters
from skimage.color import rgb2gray

from src.music_processor.process_music import process_music

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
    process_music(img[0, :])


def process_image_download(url):
    print(url)
    result = urllib.request.urlretrieve(url, 'assets/new_image.jpg')

    img = io.imread("../api/assets/new_image.jpg")

    process_music(rgb2gray(img))
