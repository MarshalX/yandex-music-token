import os


def walker(folder):
    for d, _, files in os.walk(os.path.join(os.getcwd(), folder)):
        for file in files:
            yield os.path.join(d[d.find(folder):], file).replace('\\', '/')


if __name__ == '__main__':
    RANDOM_VOICES_FOLDER = 'random_voices'

    with open('previews.txt', 'w') as f:
        f.write('\n'.join(sorted(walker(RANDOM_VOICES_FOLDER))))
