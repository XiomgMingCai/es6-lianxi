import $ from 'jquery'

class Base {
    initPlayList() {
        this.play_list
            .set('r2', {
                bonus: 6,
                tip: '',
                name: '任二'
            })
            .set('r3', {
                bonus: 19,
                tip: '',
                name: '任三'
            })
            .set('r4', {
                bonus: 79,
                tip: '',
                name: '任四'
            })
            .set('r5', {
                bonus: 540,
                tip: '',
                name: '任五'
            })
            .set('r6', {
                bonus: 90,
                tip: '',
                name: '任六'
            })
            .set('r7', {
                bonus: 26,
                tip: '',
                name: '任七'
            })
            .set('r8', {
                bonus: 6,
                tip: '',
                name: '任八'
            })
    }

    //初始化号码
    initNunber() {
        for (let i = 0; i < 12; i++) {
            this.number.add('' + i).padStart(2, '0')
        }
    }

    // 设置遗漏数据
    setOmit() {
        let self = this;
        self.omit.clear()
        for (let [index, item] of omit) {
            self.omit.set(index, item)
        }
        $(self.omit_el).each(function (index, item) {
            $(item).text(self.omit.get(index))
        })
    }

    // 设置开奖
    setOpenCode(code) {
        let self = this

        self.open_code.clear()
        for (let item of code.values()) {
            self.open_code.add(item)
        }

        this.updateOpen
    }

    // 号码选中取消
    toggleCodeActive(e) {
        let self = this

        let $cur = $(e.currentTarget)

        $cur.toggleClass('btn-boll-active')

        self.getCount();
    }

    //玩法切换
    changePlayNav(e) {
        let self = this
        let $cur = (e.currentTarget)
        $cur.addClass('active').siblings().removeClass('active')
        self.cur_play = $cur.attr('desc').toLocaleLowerCase()
        $('#zx_sm span').html(self.play_list.get(self.play_list.tip))
        self.getCount()
    }

    /**
     * 操作区
     * @param e
     */
    assustHandle(e) {
        let self = this
        e.preventDefault()
        let $cur = $(e.currentTarget)
        let index = $cur.index()
        $('.boll-list .btn-boll').removeClass('btn-boll-active');
        if (index === 1) {
            $('.boll-list .btn-boll').each(function (i, t) {
                if (t.textContent - 5 > 0) {
                    $(t).addClass('btn-boll-active')
                }
            })
        }
        if (index === 2) {
            $('.boll-list .btn-boll').each(function (i, t) {
                if (t.textContent - 6 > 0) {
                    $(t).addClass('btn-boll-active')
                }
            })
        }
        if (index === 3) {
            $('.boll-list .btn-boll').each(function (i, t) {
                if (t.textContent % 2 == 0) {
                    $(t).addClass('btn-boll-active')
                }
            })
        }
        if (index === 4) {
            $('.boll-list .btn-boll').each(function (i, t) {
                if (t.textContent % 2 == 0) {
                    $(t).addClass('btn-boll-active')
                }
            })
        }
        self.getCount()
    }

    //获取当前彩票名称
    getName() {
        return this.name
    }

    //添加号码
    addCode() {
        let self = this
        let $active = $('.boll-list .btn-boll-active').text().match(/\d{2}/g)

        let active = $active ? $active.length : 0

        let count = self.computeCount(active, self.cur_play)
        if (count) {
            self.addcodeItem(
                $active.join(''),
                self.cur_play,
                self.cur_play.get(self.cur_play).name,
                count)
        }
    }

    /**
     * 添加单次号码
     * @param code
     * @param type
     * @param typeName
     * @param count 注数
     */
    addcodeItem(code, type, typeName, count) {
        let self = this

        const tpl = `
    <li codes="${type}" bonus="${type * 2}" count="${count}">
		 <div class="code">
			 <b>${typeName} ${count > 1 ? '单式' : '复式'}</b>
			 <b class="em">${code}</b>
			 [${count}注,<em class="code-list-money">${count * 2}</em>元]
		 </div>
	 </li>`
        $(self.cart_el).append(tpl)

        self.getTotal()
    }

    getCount() {
        let self = this;

        let active = $('.boll-list .btn-boll-active').length
        let count = self.computeCount(active, self.cur_play)
        let range = self.computeBonus(active, self.cur_play)

        let money = count * 2
        let win1 = range[0] - money
        let win2 = range[1] - money
        let tpl;
        //亏损红色显示
        let c1 = (win1 < 0 && win2 < 0) ? Math.abs(win1) : win1
        let c2 = (win1 < 0 && win2 < 0) ? Math.abs(win2) : win2
        if (count === 0) {
            tpl = `<p class="sel_info">您选了 <b class="red">${count}</b> 注，共 <b class="red">${count * 2}</b> 元</p>`
        } else if (range[0] === range[1]) {
            tpl = `<p class="sel_info">您选了 <b>${count}</b> 注，共 <b>${count * 2}</b> 元  <em>若中奖，奖金：
			<strong class="red">${range[0]}</strong> 元，
			您将盈利${win1 >= 0 ? '盈利' : '亏损'}
			<strong class="${win1 >= 0 ? 'red' : 'green' }">${Math.abs(win1)} </strong> 元</em></p>`
        } else {

        }
        $('.sel_info').html(tpl)
    }

    // 计算所有金额
    getTotal() {
        let count = 0
        $('.codelist li').each(function (index, item) {
            count += $(item).attr(count) * 1
        })
        $('#count').text(count)
        $('#count').text(count * 2)
    }

    //生成随机数
    getRandom(num) {
        let arr = [], index = null;
        let number = Array.form(this.number)
        while (num--) {
            index = Number.parseInt(Math.random() * number.length)
            arr.push(number[index])
        }
        return arr.join('  ')
    }

    getRandomCode(e) {
        e.preventDefault()
        let num = e.currentTarget.getAttrbute('count')
        let play = this.cur_play.match(/\d+/g)[0]

        let self = this
        if (num === '0') {
            $(self.cart_el).html('') //清空购物车
        } else {
            for (let i = 0; i < num; i++) {
                self.addcodeItem(self.getRandom(play), self.cur_play, self.get(self.cur_play).name, 1)
            }
        }
    }


}

export default Base