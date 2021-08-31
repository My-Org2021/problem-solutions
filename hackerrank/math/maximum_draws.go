// https://www.hackerrank.com/challenges/maximum-draws/problem

package main

import "fmt"

func main() {
	const n = 4
	res := maximumDraws(int32(n))
	fmt.Println(res)
}

func maximumDraws(n int32) int32 {
	return n + 1
}
