#!/usr/bin/env python 

# 01 open and count words 
raw_text = "" 
with open("mark-twain-autobio.txt", "r", encoding="utf-8") as f:
    raw_text = f.read()

print(f"Total number of characters: {len(raw_text)}")
print(raw_text[:100])

# 02 split and capture punctuation, remove whitespace 
import re 
# Capture groups in a split pattern are kept in the resulting list
split_text = re.split(r'([.,?_!"()\']|--|&mdash;)|\s', raw_text)
preprocessed = [item for item in split_text if type(item) == str and item.strip()]
print(split_text[:100])
print(f"Total number of words {len(split_text)}")

# 03 create unique token IDs 
all_words = sorted(list(set(preprocessed)))
vocab_size = len(all_words)
print(f"Vocabulary size {vocab_size}")

# Create a hashmap to assign token IDs from 0 to vocab_size - 1
token_ids = {}
current_id = 0
for token in all_words:
    if token not in token_ids:
        token_ids[token] = current_id
        current_id += 1

print("First 500 token IDs")
for (i,item) in enumerate(token_ids.items()):
    print(item)
    if (i > 1000):
        break

# 04-unknowns-meta-tags 
text = "At eleven I was privately crying; I couldn't help it, the pain was so cruel"
split_text = re.split(r'([.,?_!"()\']|--|&mdash;)|\s', raw_text)
preprocessed = [item for item in split_text if type(item) == str and item.strip()]

text_into_token_ids = [token_ids[i] for i in preprocessed]
print(f"Encoded sentence {text_into_token_ids}")
