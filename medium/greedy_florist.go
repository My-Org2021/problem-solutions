// https://www.hackerrank.com/challenges/greedy-florist/problem

package main

import (
	"fmt"
	"sort"
)

func main() {
	var k int32 = 3
	var c = []int32{1, 3, 5, 7, 9}

	res := getMinimumCost(k, c)
	fmt.Println(res)
}

func getMinimumCost(k int32, c []int32) int32 {
	var res, p, f int32 = 0, 1, k

	if int(k) == len(c) {
		for i := 0; i < int(k); i++ {
			res += c[i]
		}

		return res
	}

	sort.Slice(c, func(a, b int) bool { return c[a] > c[b] })

	for i := 0; i < len(c); i++ {
		res += p * c[i]
		f--

		if f == 0 {
			p++
			f = k
		}
	}

	return res
}
