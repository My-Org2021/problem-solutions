// https://www.hackerrank.com/challenges/connecting-towns/problem

package main

import "fmt"

func main() {
	n := 4
	routes := []int32{3, 4, 5}

	res := connectingTowns(int32(n), routes)
	fmt.Println(res)
}

func connectingTowns(n int32, routes []int32) int32 {
	var product int32 = 1
	for i := 0; i < int(n-1); i++ {
		product = product * routes[i] % 1234567
	}
	return product
}
