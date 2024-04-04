from aifc import Error
from PIL import Image

f = open("train-images-idx3-ubyte", "rb")

data = f.read()

def convert_four(arr):
    result = 0
    for i in arr:
        print(f"result {result} {i}")
        result *= 255
        result += i
    return result
size = int(data[6]*256+data[7])
print(f"Number of images {size}")

width = int(convert_four(data[8:12]))
height = int(convert_four(data[12:16]))

print(f"width {width}")
print(f"height {height}")

images = []

for i in range(size):
    start = 16 + i * 784
    end = 16 + (i+1)* 784
    image = data[start:end]
    images.append(image)

i = 0

for image in images:
    newImg = Image.new("RGB", (width, height))
    for x in range(width, height):
        for y in range(height):
            pixel = int(image [x*width+y])
            if pixel > 255:
                #Not sure if this works, threw a Pylance error
                raise Error(f"Invalid 8-bit pixel value {pixel}")
            newImg.putpixel((x,y), (pixel, pixel, pixel))
        newImg.save(f"minst-{i}.png")
        i += 1
