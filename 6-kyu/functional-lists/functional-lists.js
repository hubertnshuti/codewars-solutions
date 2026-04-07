    length() {
        let count = 0
        let cur = this
        while (!cur.isEmpty()) {
            count++
            cur = cur.next
        }
        return count
    }
    push(x) {
        return new ListNode(x, this)
    }
    remove(x) {
        const newNext = this.next.remove(x)
        if (this.value === x) return newNext
        if (newNext === this.next) return this
        return new ListNode(this.value, newNext)
    }
    append(xs) {
        const newNext = this.next.append(xs)
        if (newNext === this.next) return this
        return new ListNode(this.value, newNext)
    }
}