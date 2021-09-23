package main

import (
	"fmt"
)

func main() {
	arr := []int32{-76, -33, 0, -37, 39, 0, 33, -10, 0, 57, 59, 0, -14, -57, 0, -96, 45, 0, -60, 82, 0, -94, -31, 0, -68, -53, 0, -57, 100, 0, 35, 81, 0, -4, 76, 0, 15, 60, 0, 2, -85, 0, 16, -70, 0, 62, -25, 0, 4, -89, 0, -79, -80, 0, -23, 97, 0, 69, -68, 0, -83, -57, 0, 74, 1, 0, -66, 23, 0, 68, -80, 0, 100, 10, 0, -73, -54, 0, 0, 4, 0, -8, -86, 0, 58, -85, 0, -100, -100, 0, 43, 61, 0, 61, -86, 0, 24, -95, 0, -54}

	plusMinus(arr)
}

func plusMinus(arr []int32) {
	var res []float64
	var negatives, positives, zeroes float64

	for i := 0; i < len(arr); i++ {
		if arr[i] == 0 {
			zeroes++
		}

		if arr[i] < 0 {
			negatives++
		}

		if arr[i] > 0 {
			positives++
		}
	}

	res = append(res, positives/float64(len(arr)))
	res = append(res, negatives/float64(len(arr)))
	res = append(res, zeroes/float64(len(arr)))

	for _, r := range res {
		fmt.Printf("%f\n", r)
	}
}
