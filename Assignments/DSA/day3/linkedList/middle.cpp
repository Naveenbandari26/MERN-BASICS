/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode prev=head;
        ListNode slow=head;
        ListNode temp=head;
        int c=0;

        while(temp!=null){
            c+=1;
            temp=temp.next;
        }
        while(prev.next!=null && prev.next.next!=null){
            prev=prev.next.next;
            slow=slow.next;
        }
        head=slow;
        if(c%2==0)
        return head.next;
        else
        return head;
    }
}