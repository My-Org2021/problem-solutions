// https://www.hackerrank.com/challenges/strange-code/problem

package main

import "fmt"

func strangeCounter(t int64) int64 {
	var res int64 = 3

	for t > res {
		t = t - res
		res *= 2
	}

	return res - t + 1
}

func main() {
	var t int64 = 17
	res := strangeCounter(t)

	fmt.Println(res)
}
