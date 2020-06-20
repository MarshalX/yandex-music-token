import os

make_prefix = lambda x: x[x.find(random_voices_folder):]
random_voices_folder = "random_voices"

def walker():
    global make_prefix, random_voices_folder
    for d, dirs, files in os.walk(os.path.join(os.getcwd(), random_voices_folder)):
        for f in files:
            yield os.path.join(make_prefix(d), f).replace('\\', '/')
    

fin = open("previews.txt", 'w')
fin.write('\n'.join(sorted(walker())))
fin.close()
