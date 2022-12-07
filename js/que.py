
num = list(map(int, input().split()))
n,m=num[0], num[1]

c = list(map(int, input().split()))
size = list(map(int, input().split()))

c.sort()
size.sort()
i=0
j=0
ans=0
while i<len(c) and j<len(size):
    if(c[i]<=size[j]):
        
        ans+=1
        i+=1
        j+=1
        print(i,j)
    else:
        j+=1
        print(i,j)
print(ans)