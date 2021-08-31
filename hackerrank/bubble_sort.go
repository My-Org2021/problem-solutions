// // https://www.hackerrank.com/challenges/ctci-bubble-sort/problem

package main

import "fmt"

func main() {
	a := []int32{6, 4, 1}
	countSwaps(a)
}

func countSwaps(a []int32) {
	count := 0

	for i := 0; i < len(a); i++ {
		for j := 0; j < len(a)-1; j++ {
			if a[j] > a[j+1] {
				a[j], a[j+1] = a[j+1], a[j]
				count++
			}
		}
	}

	fmt.Println("Array is sorted in", count, "swaps.")
	fmt.Println("First Element:", a[0])
	fmt.Println("Last Element:", a[len(a)-1])
}
