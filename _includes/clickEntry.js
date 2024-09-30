<script>
    let clickCount = 0;
    let menuAdded = false;
    let clickTimer = null;       // 判断点击是否连续
    const timeoutDuration = 250; // 设置超时时间
    const clickEntry = document.getElementById("clickEntry");
    
    clickEntry.addEventListener("click", () => {
        // 每次点击前，清除之前的定时器
        if (clickTimer) {
            clearTimeout(clickTimer);
        }
    
        clickCount++;
    
        // 启动一个新的定时器
        clickTimer = setTimeout(() => {
            clickCount = 0; // 超时后重置点击计数
        }, timeoutDuration);
    });
    
    // 监听右键点击事件
    document.addEventListener("contextmenu", function (e) {
        if ((clickCount === 7 || clickCount === 13) && !menuAdded) {
            e.preventDefault();
    
            const menu = document.createElement("ul");
            menu.style.position = "absolute";
            menu.style.left = `${e.pageX}px`;
            menu.style.top = `${e.pageY}px`;
            menu.style.backgroundColor = "#fff";
            menu.style.border = "1px solid #ccc";
            menu.style.paddingTop = "10px";
            menu.style.paddingBottom = "10px";
            menu.style.paddingLeft = "10px";
            menu.style.paddingRight = "10px";
            menu.style.listStyle = "none";
            menu.style.borderRadius = "10px";
            menu.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.25)"
            menu.style.zIndex = "1000";
            document.body.appendChild(menu);
    
            // 创建新的右键菜单选项
            const newOption = document.createElement("li");
            if (clickCount === 7) {
                newOption.innerHTML = `<a href="/Undifined_A/" style="color: #000000; text-decoration: none" onmouseover="this.style.textDecoration='none'" onmouseout="this.style.textDecoration='none'">Undifined_A</a>`;
            } else if (clickCount === 13) {
                newOption.innerHTML = `<a href="/Undifined_B/" style="color: #000000; text-decoration: none" onmouseover="this.style.textDecoration='none'" onmouseout="this.style.textDecoration='none'">Undifined_B</a>`;
            }
            menu.appendChild(newOption);
    
            menuAdded = true;
    
            // 点击菜单项时隐藏菜单并重置
            newOption.addEventListener("click", () => {
                document.body.removeChild(menu);
                clickCount = 0; // 重置点击计数
                menuAdded = false; // 重置菜单标记
            });
    
            // 点击其他地方时隐藏菜单
            document.addEventListener("click", function () {
                if (menuAdded) {
                    document.body.removeChild(menu);
                    menuAdded = false;
                }
            }, { once: true });
        }
    });
</script>
