#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> s;
        for (int i = 0; i < nums.size(); i++) {
            if (s.find(target - nums[i]) != s.end()) {
                return {s[target - nums[i]], i};
            }
            s[nums[i]] = i;
        }
        return {};
    }
};