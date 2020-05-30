import matplotlib.pyplot as plt
import matplotlib

from skimage import data, io
from skimage.color import rgb2gray
from skimage.filters import gaussian

matplotlib.rcParams['font.size'] = 18

image = io.imread('../assets/color.png')


def process_image_grey():
    # for name in images:
    # caller = getattr(data, "hubble_deep_field")
    # image = caller()
    print("-----")
    print(image)
    print("-----")

    print(len(image))
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


def process_image():
    # for name in images:
    # caller = getattr(data, "hubble_deep_field")
    # image = caller()
    print("-----")
    print(image)
    print("-----")

    print(len(image))
    print(len(image[0]))
    # cropped_image = image[0:100, 0:100]
    # image = gaussian(image, 10)

    plt.figure()
    plt.title("cell")
    if image.ndim == 2:
        plt.imshow(image, cmap=plt.cm.gray)
    else:
        plt.imshow(image)

    plt.show()

    return rgb2gray(image)
