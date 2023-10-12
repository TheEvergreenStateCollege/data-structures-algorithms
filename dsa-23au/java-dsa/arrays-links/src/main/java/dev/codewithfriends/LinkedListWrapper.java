package dev.codewithfriends;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;



public class LinkedListWrapper<T> implements List<T> {

    private int maxSize;
    private int currentSize;
    private Node<T> head;
    private Node<T> tail;
    

    public LinkedListWrapper(int maxSize) {
        this.maxSize = maxSize;
        this.head = null;
    }

    @Override
    public int size() {
        return this.currentSize;
    }

    @Override
    public boolean isEmpty() {
        return currentSize == 0;
    }

       @Override
    public boolean contains(Object o) {
        Node<T> current = head; 
        //requieres the size of the LinkedListWrapper to be something any method can access in the class
        while (current != null) {
            if (current.value.equals(o)) {
                return true;
            }
            current = current.next;
        }
        return false;

    }
    // We are skipping this method as of 10/12/2023
    @Override
    public Iterator iterator() {
        return null;
    }

    @Override
    public Object[] toArray() {
        Object[] returnArray = new Object[this.currentSize];

        int i = 0;
        Node<T> current = head;
        while (current != null) {
            returnArray[i] = current.value;
            i++;
            current = current.next;
        }

        return returnArray;
        //Done!(maybe)
        //!!!!!!!!!!!!!!!!!!
    }
    

    @Override
   public boolean add(Object o) {
    Node<T> newNode = new Node(o); // Create a new node with the object o as payload

    if (currentSize >= maxSize) {
        return false;
    }

    if (this.head == null) {
        this.head = newNode; // If the list is empty, set the new node as the head
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }

    currentSize++;
    return true; // Indicate that the addition was successful
}

    @Override
    public boolean remove(Object o) {
        return false;
    }

    @Override
    public boolean addAll(Collection c) {
        return false;
    }

    @Override
    public boolean addAll(int index, Collection c) {
        return false;
    }

    @Override
    public void clear() {

    }

    @Override
    public Object get(int index) {
        return null;
    }

    @Override
    public Object set(int index, Object element) {
        return null;
    }

    @Override
    public void add(int index, Object element) {

    }

    @Override
    public Object remove(int index) {
        return null;
    }

    @Override
    public int indexOf(Object o) {
        return 0;
    }

    @Override
    public int lastIndexOf(Object o) {
        return 0;
    }

    @Override
    public ListIterator listIterator() {
        return null;
    }

    @Override
    public ListIterator listIterator(int index) {
        return null;
    }

    @Override
    public List subList(int fromIndex, int toIndex) {
        return null;
    }

    @Override
    public boolean retainAll(Collection c) {
        return false;
    }

    @Override
    public boolean removeAll(Collection c) {
        return false;
    }

    @Override
    public boolean containsAll(Collection c) {
        return false;
    }

    @Override
    public Object[] toArray(Object[] a) {
        return new Object[0];
    }

    



}


