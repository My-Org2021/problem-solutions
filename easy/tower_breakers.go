// https://www.hackerrank.com/challenges/tower-breakers-1/problem

package main

import "fmt"

func main() {
	n := 1
	m := 4
	res := towerBreakers(int32(n), int32(m))
	fmt.Println(res)
}

func towerBreakers(n int32, m int32) int32 {
	if m == 1 || n%2 == 0 {
		return 2
	} else {
		return 1
	}
}
