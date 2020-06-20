import os


fin = open("previews.txt", 'w')
random_voices_folder = "random_voices"
make_prefix = lambda x: x[x.find(random_voices_folder):]
for d, dirs, files in os.walk(os.path.join(os.getcwd(), random_voices_folder)):
    for f in files:
        print(os.path.join(make_prefix(d), f), file=fin)
fin.close()
