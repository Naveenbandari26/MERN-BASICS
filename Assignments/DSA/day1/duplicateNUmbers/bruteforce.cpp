#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
   
    int findDuplicate(vector<int>& nums) {
        int n = nums.size();
        
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] == nums[j]) {
                    return true;  
                }
            }
        }
        
        
        return false;  
        
    }
};