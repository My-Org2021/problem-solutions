// https://www.hackerrank.com/challenges/priyanka-and-toys/problem

package main

import (
	"fmt"
	"sort"
)

func toys(w []int32) int32 {
	res := 0
	index := -1

	sort.Slice(w, func(i, j int) bool { return w[i] < w[j] })

	for i := 0; i < len(w); i++ {
		if int(w[i]) > index {
			index = int(w[i] + 4)
			res++
		}
	}

	return int32(res)
}

func main() {
	w := []int32{1, 2, 3, 21, 7, 12, 14, 21}
	res := toys(w)
	fmt.Println(res)
}
