export  default  class Timer {
    /**
     * @param end 截止时间
     * @param update 更新回调
     * @param handle 倒计时结束回调
     */
    countdown(end, update, handle) {
        const self = this
        const NOW = new Date().getTime();

        if (NOW - end) {
            handle.call(self)//倒计时结束回调
        } else {
            let last_time = end - NOW //剩余时间
            const px_d = 1000 * 60 * 60 * 24
            const px_h = 1000 * 60 * 60
            const px_m = 1000 * 60
            const px_s = 1000

            let d = Math.floor(last_time / px_d)
            let h = Math.floor((last_time - d * px_d) / px_h)
            let m = Math.floor((last_time - d * px_d - h * px_h) / px_m)
            let s = Math.floor((last_time - d * px_d - h * px_h - m * px_m) / px_s)

            let r = []

            if (d > 0) {
                r.push(`<em>${d}</em>天`)
            }
            if (h > 0) {
                r.push(`<em>${h}</em>时`)
            }
            if (m > 0) {
                r.push(`<em>${m}</em>分`)
            }
            if (s > 0) {
                r.push(`<em>${s}</em>秒`)
            }

            self.last_time = r.join('')

            update.call(self, r.join(''))

            setTimeout(function () {
                self.countdown(end, update, handle)
            }, 1000)

        }
    }
}