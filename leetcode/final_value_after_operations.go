package main

import "fmt"

func main() {
	operations := []string{"--X", "X++", "X++"}

	res := finalValueAfterOperations(operations)
	fmt.Println(res)
}

func finalValueAfterOperations(operations []string) int {
	var res float64

	for _, operation := range operations {
		for i := 0; i < len(operation); i++ {
			s := string(operation[i])

			if s == "+" {
				res += 0.5
			}
			if s == "-" {
				res -= 0.5
			}
		}
	}

	return int(res)
}
