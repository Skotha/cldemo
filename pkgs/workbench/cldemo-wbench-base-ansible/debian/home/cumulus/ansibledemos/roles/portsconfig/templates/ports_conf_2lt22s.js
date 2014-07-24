# ports.conf --
#
# configure port speed, aggregation, and subdivision.
#
# The Celestica Smallstone has:
# 32 QSFP ports numbered 1-32
# These ports are configurable as 40G or split into 4x10G ports.
#
# The X pipeline covers QSFP ports 1 through 16 and the Y pipeline
# covers QSFP ports 17 through 32.
#
# The Trident2 chip can only handle 52 logical ports per pipeline.
#
# This means 12 is the maximum number of 40G ports you can ungang
# per pipeline. The 12 40G ports become 48 unganged 10G ports,
# plus the remaining 4 40G ports totals 52 logical ports for that
# pipeline.
#
# QSFP+ ports
#
# <port label 1-32> = [4x10G|40G]
1=4x10G
2=40G
3=40G
4=40G
5=40G
6=40G
7=40G
8=40G
9=40G
10=40G
11=40G
12=40G
13=40G
14=40G
15=40G
16=40G
17=40G
18=40G
19=40G
20=40G
21=40G
22=40G
23=40G
24=40G
25=40G
26=40G
27=40G
28=40G
29=40G
30=40G
31=40G
32=4x10G
