package com.corejava.assessment;
import java.util.Scanner;
import static java.lang.System.out;

public class BubbleSort {
	 
	public static void main(String[] args)
	{  
		Scanner scan = new Scanner(System.in);
		out.println("Enter all the elements:");
		int[] arr = new int[5];
		 
		 for(int i = 0; i < 5; i++)
	        {
	            arr[i] = scan.nextInt();
	        }
 
		out.println("Array before sorting"); 
		
	    printArray(arr);
 
		bubbleSort(arr); 
 
		out.println(" After Sorting---");  
		
		printArray(arr); 
 
	}  
 	static void bubbleSort(int[] array)
	{  
		int n = array.length;  
		int temp = 0;  
		for(int i=0; i < n; i++) 
		{   
			for(int j=1; j < (n-i); j++)
			{  
			      if(array[j-1] > array[j])
				{   
				    temp = array[j-1];  
				    array[j-1] = array[j];  
					array[j] = temp;  
				   
				}  
 
			}  
		}  
 
	} 
	
	static void printArray(int[] array){
	    
	    for(int i=0; i < array.length; i++)
		{  
			System.out.print(array[i] + " ");  
		} 
	    out.println();
	    
	}
}
