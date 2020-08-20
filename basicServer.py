from flask import Flask, render_template
import pandas as pd
import numpy as np
import random

app = Flask(__name__)

def read_words(file):
    words = pd.read_excel(file)
    return words


# create words board for play
def choose_words():
    chosen_word = []
    while len(chosen_word) < 25:
        random_number = random.randrange(0, words_container.shape[0], 1)
        if words_container['מילים'][random_number] in chosen_word:
            continue
        else:
            chosen_word.append(words_container['מילים'][random_number])
    return np.reshape(chosen_word, (5, 5))

if __name__ == "__main__":
    words_file = 'WordsContainer.xlsx'
    words_container = read_words(words_file)
    words_board = choose_words()
    app.run()



