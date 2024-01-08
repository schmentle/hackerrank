function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const appleCount = apples.filter(apple => a + apple >= s && a + apple <= t).length;
    const orangeCount = oranges.filter(orange => b + orange >= s && b + orange <= t).length;

    console.log(appleCount);
    console.log(orangeCount);
}