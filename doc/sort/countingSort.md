### 计数排序
&emsp;&emsp;计数排序是一个非基于比较的排序算法，该算法于1954年由 Harold H. Seward 提出。它的优势在于在对一定范围内的整数排序时，它的复杂度为Ο(n+k)（其中k是整数的范围），快于任何比较排序算法。 [1-2]  当然这是一种牺牲空间换取时间的做法，而且当O(k)>O(n*log(n))的时候其效率反而不如基于比较的排序（基于比较的排序的时间复杂度在理论上的下限是O(n*log(n)), 如归并排序，堆排序）

#### 1、算法原理：
1）找出待排序的数组中最大和最小的元素；
2）统计数组中每个值为i的元素出现的次数，存入数组C的第i项；
3）对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）；
4）反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1；

#### 2、算法分析：
时间复杂度：

&emsp;&emsp;计数排序对输入的数据有附加的限制条件：
&emsp;&emsp;1）输入的线性表的元素属于有限偏序集S；
&emsp;&emsp;2）设输入的线性表的长度为n，|S|=k（表示集合S中元素的总数目为k），则k=O(n)。
&emsp;&emsp;在这两个条件下，计数排序的复杂性为O(n)。

算法稳定性：

&emsp;&emsp;我们看到，计数排序算法没有用到元素间的比较，它利用元素的实际值来确定它们在输出数组中的位置。因此，计数排序算法不是一个基于比较的排序算法，从而它的计算时间下界不再是O(nlogn)。另一方面，计数排序算法之所以能取得线性计算时间的上界是因为对元素的取值范围作了一定限制，即k=O(n)。如果k=n2,n3,..，就得不到线性时间的上界。此外，我们还看到，由于算法第4行使用了downto语句，经计数排序，输出序列中值相同的元素之间的相对次序与他们在输入序列中的相对次序相同，换句话说，计数排序算法是一个稳定的排序算法。

#### 3、动图演示：
![image](https://github.com/SKY-JING/merlion/blob/master/doc/imgs/counting/counting.gif?raw=true)