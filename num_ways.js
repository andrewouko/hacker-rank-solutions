// num of ways of getting to the top if you can ascend one or 2 steps to the top
        // of a stairs with n length of steps

        // recursive algo solution
        function numWays(n) {
            // assume n is onl positive integers from 0

            // recursive step for n >= 2: n will be the sum of the previous 2 solutions to the function
            if (n >= 2) return numWays(n - 1) + numWays(n - 2)
            // base step for n = 0 || n = 1
            else return 1
        }

        // dyanmic programming solution
        function dpNumWays(n) {
            // assume n is onl positive integers from 0

            // return immediately for the base cases
            if (n == 1 || n == 0) return 1
            // for other cases
            else {
                // array to store the results
                let arr = []
                // since we already know the base case solutions
                arr[0] = 1; arr[1] = 1;
                // all other cases will be the sum of two previous solutions
                for (i = 2; i <= n; i++) {
                    arr[i] = arr[(i - 1)] + arr[(i - 2)]
                }
                return arr[n]
            }
        }

        // console.log(numWays(5))
        // console.log(dpNumWays(5))


        // console.log('drpoklj'.split('').sort().join(''))