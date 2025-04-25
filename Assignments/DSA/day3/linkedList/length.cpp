class Solution {
    public:
      // Function to count nodes of a linked list.
      int getCount(struct Node* head) {
          Node* temp=head;
          int c=0;
          while(temp){
              c+=1;
              temp=temp->next;
          }
          return c;
          // Code here
          
      }
  };