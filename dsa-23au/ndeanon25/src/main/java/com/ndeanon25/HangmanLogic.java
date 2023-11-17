package com.ndeanon25;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.SortedSet;
import java.util.TreeMap;
import java.util.TreeSet;

public class HangmanLogic {
    private Set<String> wordList;
    private SortedSet<Character> guesses;
    private int remainingGuesses;

    /**
    * Initializes the Hangman game logic with a given dictionary of words, word length, and guess amount.
    * This constructor initializes the Hangman game logic by setting the remaining number of guesses,
    * creating an empty set to store guessed characters, and filtering the provided dictionary to
    * include only words of a specified length.
    * @param dictionary    A list of words to be used as the dictionary for the Hangman game.
    * @param length        The desired length of the secret word to be guessed in the game.
    * @param guessAmount   The total number of incorrect guesses allowed in the game.
    */

    public HangmanLogic(List<String> dictionary, int length, int guessAmount){
        remainingGuesses = guessAmount;
        guesses = new TreeSet<Character>();
        wordList = new TreeSet<String>(); 

        //Iterates and adds all the words that will equals the length chosen from user
        for(String word: dictionary){
            if(word.length() == length){
                wordList.add(word);
            }
        }
    }

    // returns a set of the remaining possible words in the dictionary file
    public Set<String> words(){
        return wordList;
    }

    //returns the number of guesses remaining in the game
    public int remainingGuesses(){
        return remainingGuesses;
    }

    //returns a sorted set of the user's letter guesses
    public SortedSet<Character> guesses(){
        return guesses;
    }

    //returns a String representation of possible target words with the account of the guessed chars 
    public String pattern(){
        if(wordList.isEmpty())
            throw new IllegalStateException();
        return pattern(wordList.iterator().next());
    }
    /**
     * This method will record the user's guess and return a String representation of the word with the guessed char.
     * Based on the guessed char, it will choose the next wordlist and then keep doing that every guess. 
     * @param guess is the character that the user has guessed.
     * @return the number of occurrences of the guessed letter in the new pattern and will update the remaining guesses.
     */

    public int record(char guess){
        if(wordList.isEmpty() || remainingGuesses == 0)
            throw new IllegalStateException();   // this throws an IllegalStateException since the game is over and no more guesses are allowed
        else if(!wordList.isEmpty() && guesses.contains(guess))
            throw new IllegalArgumentException(); //this is when a user chooses the same char 
            
        //Makes a HashMap and will group all the words with similar patterns
        Map<String,Set<String>> wordChoices = new TreeMap<String, Set<String>>();
        String initialWordChoice = this.pattern();
        guesses.add(guess); // the guessed char is added to the Set<String> of the users guess
        afterGuessList(wordChoices);

        if(this.pattern().equals(initialWordChoice))
            remainingGuesses--;
        return numOfwords(this.pattern(),guess);
    }

    /**
     * This method counts the occurrences of a specific character in a given String. 
     * It scans each character in the String and increments matches whenever
     * it finds a character that matches the provide char guess. 
     * @param pattern String representation of the wordList
     * @param guess character that the user has guessed.
     * @return the number of occurrences of the guessed letter within the pattern.
     */

    private int numOfwords(String pattern, char guess) {
        int matches = 0;
        
        for(int i = 0; i < pattern.length(); i++){
            char j = pattern.charAt(i);
            if( j == guess)
                matches++;
        }
        return matches;
    }

    /**
     * This method is used to update the wordList and categorizes words based on their letter pattern.
     * @param similarWords HashMap of patterns and the sets of words in the wordList.
     * Patterns represent the known and unknown letters of the wordList.
     * 
     */

    private void afterGuessList(Map<String,Set<String>> similarWords){
        for(String word: wordList){
            String currentPattern = pattern(word);
            if(!similarWords.containsKey(currentPattern))
                similarWords.put(currentPattern, new TreeSet<String>());
            similarWords.get(currentPattern).add(word);
        }
        wordList = similarWords.get(getLargestKey(similarWords));
    }
    
    /**
    * Finds and returns the key associated with the largest set of similar words in the input map.
    * This method iterates through the keys of the input map, where each key corresponds to a category or group
    * of similar words, and the associated value is a set of strings representing those similar words.
    * It determines the key that corresponds to the set with the maximum number of elements (i.e., the largest set).
    * @param similarWords Map where keys are category labels and values are sets of similar words.
    * @return The key (category label) associated with the largest set of similar words.
    *         If the input map is empty, an empty string is returned.
    *         If all sets in the input map are empty, the key of the first entry encountered is returned.
    */

    private String getLargestKey(Map<String, Set<String>> similarWords) {
        int maxLength = 0;
        String maxKey = "";
        
        for(String key: similarWords.keySet()){
            if(similarWords.get(key).size() > maxLength){
                maxLength = similarWords.get(key).size();
                maxKey = key;
            }
        }
        return maxKey;
    }

    /**
     * The chars that have not been guessed are replaced with dashes
     * @param word desired String to be changed
     * @return a string of a given word with the unknown char
     */

    private String pattern(String word){
        String builder = "";
        
        for(int i = 0; i < word.length();i++){
            if(guesses.contains(word.charAt(i)))
                builder += word.substring(i, i+1);
            else
                builder += "-";
        }
        return builder;
    }

    
}
