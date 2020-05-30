from src.image_processor.process_image import process_image, process_image_grey
from src.music_processor.process_music import process_music
if __name__ == '__main__':
    print(process_image_grey())
    grey_array = [2, 10, 10, 10, 20]
    r_array = [2, 10, 10, 10, 20]
    g_array = [2, 10, 10, 10, 20]
    b_array = [2, 10, 10, 10, 20]
    process_music(grey_array)