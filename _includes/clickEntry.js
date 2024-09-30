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
        if (clickCount === 10 || clickCount === 16) {
            e.preventDefault();
    
            // 使用 setTimeout 添加新的菜单项
            setTimeout(() => {
                // 创建新的菜单项
                const newMenuItem = document.createElement("li");
                newMenuItem.textContent = clickCount === 10 ? "进入 A" : "进入 B";
                newMenuItem.style.cursor = "pointer";
    
                // 点击新菜单项时的行为
                newMenuItem.addEventListener("click", () => {
                    window.location.href = clickCount === 10 ? "A.html" : "B.html";
                });
    
                // 获取默认菜单
                const defaultMenu = document.createElement("div");
                defaultMenu.innerHTML = "<ul style='list-style:none; padding: 0; margin: 0;'>" +
                    "<li>复制</li><li>编辑</li><li>放大</li><li>添加</li><li>检查</li>" +
                    "</ul>";
                document.body.appendChild(defaultMenu);
    
                // 将新的菜单项添加到默认菜单中
                defaultMenu.firstChild.appendChild(newMenuItem);
    
                // 设置菜单位置
                defaultMenu.style.position = "absolute";
                defaultMenu.style.left = `${e.pageX}px`;
                defaultMenu.style.top = `${e.pageY}px`;
                defaultMenu.style.backgroundColor = "#fff";
                defaultMenu.style.border = "1px solid #ccc";
                defaultMenu.style.zIndex = "1000";
    
                // 点击其他地方时隐藏菜单
                document.addEventListener("click", function () {
                    document.body.removeChild(defaultMenu);
                }, { once: true });
            }, 0); // 确保默认菜单渲染后再添加新选项
        }
    });
</script>
