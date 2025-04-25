#include <iostream>
#include <vector>
using namespace std;
//prefix approach
class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        int n = nums.size();
        vector<int> prefix(n, 0);
        
        for (int num : nums) {
            prefix[num - 1] = 1;  
        }
        
        vector<int> missingNumbers;
        for (int i = 0; i < n; i++) {
            if (prefix[i] == 0) {  
                missingNumbers.push_back(i + 1);
            }
        }
        
        return missingNumbers;
    }
};