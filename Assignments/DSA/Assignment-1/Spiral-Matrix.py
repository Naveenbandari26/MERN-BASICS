# 54. Spiral Matrix

# Given an m x n matrix, return all elements of the matrix in spiral order.

 

# Example 1:


# Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
# Output: [1,2,3,6,9,8,7,4,5]
# Example 2:


# Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
# Output: [1,2,3,4,8,12,11,10,9,5,6,7]

class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        top=0
        bott=len(matrix)-1
        left=0
        right=len(matrix[0])-1
        res=[]
        while left<=right and top<=bott:
            for i in range(left,right+1):
                res.append(matrix[top][i])
            top+=1
            for j in range(top,bott+1):
                res.append(matrix[j][right])
            right-=1
            if(top<=bott):
                for k in range(right,left-1,-1):
                    res.append(matrix[bott][k])
                bott-=1
            if left<=right:
                for l in range(bott,top-1,-1):
                    res.append(matrix[l][left])
                left+=1
        return res




        

 