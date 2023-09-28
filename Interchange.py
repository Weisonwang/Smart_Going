import json
class Node:
  def __init__(self, data, next=None):
    self.data = data
    self.next = next

# 构建链表
head = Node(1)
current = head
for i in range(2, 51):
  current.next = Node(i)
  current = current.next
def serialize(head):
  data = []
  while head:
    data.append(head.data)
    head = head.next
  return json.dumps(data)

json_data = serialize(head)