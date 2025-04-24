import{_ as e,E as t,c as p,b as h,w as i,bf as k,m as s,a as n,a4 as r,o as a,J as d}from"./chunks/framework.DOBBHlqS.js";const f=JSON.parse('{"title":"Linux服务管理命令 service 与 systemctl","description":null,"frontmatter":{"title":"Linux服务管理命令 service 与 systemctl","description":null,"time":"2025-04-02 18:35","category":"linux","tag":"服务管理|linux"},"headers":[],"relativePath":"notes/20250402_18_35.md","filePath":"notes/20250402_18_35.md"}'),c={name:"notes/20250402_18_35.md"},o=s("h2",{id:"systemd-介绍",tabindex:"-1"},[n("Systemd 介绍 "),s("a",{class:"header-anchor",href:"#systemd-介绍","aria-label":'Permalink to "Systemd 介绍"'},"​")],-1),E=s("p",null,"Systemd 是 Linux 系统工具，用来启动守护进程，已成为大多数发行版的标准配置。Systemd 它的设计目标是为系统的启动和管理提供一套完整的解决方案。根据 Linux 惯例，字母 d 是守护进程（daemon）的缩写，Systemd 这个名字的含义，就是它要守护整个系统。",-1),g=s("ul",null,[s("li",null,[s("p",null,"CentOS 7 使用 Systemd 替换了 SysV")]),s("li",null,[s("p",null,"Ubuntu 从 15.04 开始使用 Systemd")])],-1),y=r(`<h3 id="unit" tabindex="-1">Unit <a class="header-anchor" href="#unit" aria-label="Permalink to &quot;Unit&quot;">​</a></h3><p>在 systemd  中，Unit  是系统中受  systemd  管理的基本对象。它表示一个资源或服务的配置单元，systemd  使用这些单元来启动、停止、监控和管理系统的各种资源和服务。<br> Unit  是  systemd  的核心概念，用于定义和管理系统中的各种资源和服务。通过不同类型的 Unit 文件，systemd  可以灵活地控制服务、挂载点、定时任务等系统资源。<br> systemd  中的 Unit 有多种类型，每种类型对应不同的资源或服务，常见的 Unit 类型包括：</p><ol><li><p><strong>服务单元（Service Unit）</strong>：用于定义和管理系统服务。</p><ul><li>文件扩展名：<code>.service</code></li><li>示例：<code>nginx.service</code></li></ul></li><li><p><strong>目标单元（Target Unit）</strong>：用于分组其他 Unit，类似于运行级别。</p><ul><li>文件扩展名：<code>.target</code></li><li>示例：<code>multi-user.target</code></li></ul></li><li><p><strong>挂载单元（Mount Unit）</strong>：用于定义文件系统的挂载点。</p><ul><li>文件扩展名：<code>.mount</code></li><li>示例：<code>home.mount</code></li></ul></li><li><p><strong>套接字单元（Socket Unit）</strong>：用于定义套接字文件，通常与  <code>.service</code>  配合使用。</p><ul><li>文件扩展名：<code>.socket</code></li><li>示例：<code>docker.socket</code></li></ul></li><li><p><strong>计时器单元（Timer Unit）</strong>：用于定义定时任务，类似于  <code>cron</code>。</p><ul><li>文件扩展名：<code>.timer</code></li><li>示例：<code>backup.timer</code></li></ul></li><li><p><strong>设备单元（Device Unit）</strong>：用于管理设备节点。</p><ul><li>文件扩展名：<code>.device</code></li><li>示例：<code>dev-sda.device</code></li></ul></li><li><p><strong>路径单元（Path Unit）</strong>：用于监控文件或目录的变化。</p><ul><li>文件扩展名：<code>.path</code></li><li>示例：<code>myapp.path</code></li></ul></li><li><p><strong>交换单元（Swap Unit）</strong>：用于管理交换分区或交换文件。</p><ul><li>文件扩展名：<code>.swap</code></li><li>示例：<code>swapfile.swap</code></li></ul></li><li><p><strong>网络单元（Network Unit）</strong>：用于管理网络接口。</p><ul><li>文件扩展名：<code>.network</code></li><li>示例：<code>eth0.network</code></li></ul></li></ol><h3 id="job" tabindex="-1">Job <a class="header-anchor" href="#job" aria-label="Permalink to &quot;Job&quot;">​</a></h3><p>在  systemd  中，Jobs  是指  systemd  正在处理的任务或操作，这些任务通常是启动、停止、重启或重新加载某个单元（Unit）的请求。<br> Jobs 的作用，当你使用  systemctl  命令对某个单元执行操作（如启动或停止服务）时，systemd 会将这些操作排入队列，并将其视为一个 Job，systemd  会按照依赖关系和优先级来处理这些 Jobs。</p><p>Jobs 的状态</p><ul><li><strong>Queued</strong>：表示当前有多少 Jobs 在队列中等待处理。</li><li><strong>Running</strong>：表示当前正在执行的 Jobs。</li></ul><h2 id="service-服务管理文件" tabindex="-1">.service 服务管理文件 <a class="header-anchor" href="#service-服务管理文件" aria-label="Permalink to &quot;.service 服务管理文件&quot;">​</a></h2><h3 id="service-文件配置详解" tabindex="-1">.service 文件配置详解 <a class="header-anchor" href="#service-文件配置详解" aria-label="Permalink to &quot;.service 文件配置详解&quot;">​</a></h3><p>.service 文件是用来注册 systemctl 管理的服务所需要的配置文件</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Description给出当前服务的简单描述。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Description</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Documentation给出文档位置。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Documentation</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># After表示在什么服务之后启动。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">After</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Before表示在什么服务之前启动。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Before</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Wants表示该服务和某服务存在某种弱依赖关系，即某服务停止运行或退出不影响该服务继续运行。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Wants</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Requires则表示”强依赖”关系，即某服务停止运行或退出，改服务也必须停止运行。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Requires</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Wants与Requires只涉及依赖关系，与启动顺序无关，默认情况下是同时启动的。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Wants</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Conflicts：代表冲突的服务，即这个项目后面接的服务如果有启动，那么我们这个 unit 本身就不能启动，我们 unit 有启动，则此项目后的服务就不能启动，就是冲突性的检查。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Conflicts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 注意：After 和 Before 只涉及启动顺序，不涉及依赖关系。</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 定义启动类型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   simple（默认值）：ExecStart启动的进程为主进程</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   forking：ExecStart 将以 fork() 方式启动，此时父进程将会退出，子进程将成为主进程</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   oneshot：类似于 simple，但只执行一次，Systemd 会等它执行完，才启动其他服务</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   dbus：类似于 simple，但会等待 D-Bus 信号后启动</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   notify：类似于 simple，启动结束后会发出通知信号，然后 Systemd 再启动其他服务</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   idle：类似于simple，但是要等到其他任务都执行完，才会启动该服务。一种使用场合是为让该服务的输出，不与其他服务的输出相混</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 定义启动进程时执行的命令，就是手动启动时执行的命令。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ExecStart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重启服务时执行的命令</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ExecReload</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 停止服务时执行的命令</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ExecStop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动服务之前执行的命令</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ExecStartPre</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动服务之后执行的命令</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ExecStartPost</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 停止服务之后执行的命令</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ExecStopPost</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 定义 Systemd 如何停止 sshd 服务</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   control-group（默认值）：当前控制组里面的所有子进程，都会被杀掉</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   process：只杀主进程</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   mixed：主进程将收到 SIGTERM 信号，子进程收到 SIGKILL 信号</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   none：没有进程会被杀掉，只是执行服务的 stop 命令</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Killmod</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 定义了 sshd 退出后，Systemd 的重启方式。对于守护进程，推荐设为on-failure。对于那些允许发生错误退出的服务，可以设为on-abnormal。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   no（默认值）：退出后不会重启</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   on-success：只有正常退出时（退出状态码为0），才会重启</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   on-failure：非正常退出时（退出状态码非0），包括被信号终止和超时，才会重启</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   on-abnormal：只有被信号终止和超时，才会重启</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   on-abort：只有在收到没有捕捉到的信号终止时，才会重启</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   on-watchdog：超时退出，才会重启</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   always：不管是什么退出原因，总是重启</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Restart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 表示 Systemd 重启服务之前，需要等待的秒数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RestartSec</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 可以设置服务的用户名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Ubuntu</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 指定服务的安装目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WorkingDirectory</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当设置为 RemainAfterExit=1 时，则当这个 daemon 所属的所有程序都终止之后，此服务会再尝试启动。这对于Type=oneshot 的服务很有帮助</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RemainAfterExit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 若这个服务在启动或者是关闭时，因为某些缘故导致无法顺利 “ 正常启动或正常结束” 的情况下，则我们要等多久才进入 “ 强制结束 ” 的状态！</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">TimeoutSec</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 可以指定启动脚本的环境配置文件！例如 sshd.service 的配置文件写入到/etc/sysconfig/sshd 当中！</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 你也可以使用 Environment= 后面接多个不同的 Shell 变量来给予设置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">EnvironmentFile</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># WantedBy 表示该服务所在的 Target, Target 的含义是服务组，表示一组服务。WantedBy=multi-user.target 指的是服务所在的 Target 是 multi-user.target</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Systemd 默认的启动 Target 就是 multi-user.target，在这个组里的所有服务，都将开机启动。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看 multi-user.target 包含的所有服务：systemctl list-dependencies multi-user.target</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WantedBy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当目前这个 unit 本身被 enable 时，Also 后面接的 unit 也请 enable。也就是具有相依性的服务可以写在这里。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Also</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进行一个链接的别名，当 systemctl enable 相关的服务时则此服务会进行链接文件的创建，以 multi-user.target 为例，这个组是用来作为默认操作环境default.target 的规划</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 因此当你设置成 default.target 时，这个 /etc/systemd/system/default.target 就会链接到 /usr/lib/systemd/system/multi-user.target</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Alias</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span></code></pre></div><h3 id="重新载入配置" tabindex="-1">重新载入配置 <a class="header-anchor" href="#重新载入配置" aria-label="Permalink to &quot;重新载入配置&quot;">​</a></h3><p>将配置好的 .service 文件移入 /etc/systemd/system 目录，并重载 systemd 配置。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl daemon-reload</span></span></code></pre></div><h3 id="查看服务配置文件路径" tabindex="-1">查看服务配置文件路径 <a class="header-anchor" href="#查看服务配置文件路径" aria-label="Permalink to &quot;查看服务配置文件路径&quot;">​</a></h3><p>查找服务的具体配置文件路径</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show puma.service --property=FragmentPath</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># FragmentPath=/etc/systemd/system/puma.service</span></span></code></pre></div><h3 id="systemd-web-server-配置用例" tabindex="-1">Systemd web server 配置用例 <a class="header-anchor" href="#systemd-web-server-配置用例" aria-label="Permalink to &quot;Systemd web server 配置用例&quot;">​</a></h3><h4 id="puma-配置用例" tabindex="-1">puma 配置用例 <a class="header-anchor" href="#puma-配置用例" aria-label="Permalink to &quot;puma 配置用例&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 服务的描述信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Description</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Puma HTTP Server</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 指定服务启动的顺序，表示当前服务需要在指定服务之后启动</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">After</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">network.target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 指定当前服务依赖的其他服务。如果依赖的服务未启动，当前服务也无法启动。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Requires=puma.socket</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Puma supports systemd&#39;s \`Type=notify\` and watchdog service</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># monitoring, as of Puma 5.1 or later.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># On earlier versions of Puma or JRuby, change this to \`Type=simple\` and remove</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># the \`WatchdogSec\` line.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">notify</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 定义服务的看门狗超时时间，如果服务未在指定时间内响应，systemd 会重启服务</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WatchdogSec</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 指定运行服务的用户</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># User=</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 指定服务运行的工作目录，应用程序代码根目录的路径</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Also replace the &quot;&lt;YOUR_APP_PATH&gt;&quot; placeholders below with this path.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Example /home/username/myapp</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WorkingDirectory</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/home/ubuntu/rails_product</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置环境变量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Environment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;RAILS_ENV=production&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 定义启动服务时执行的命令</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># SystemD will not run puma even if it is in your path. You must specify</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># an absolute URL to puma. For example /usr/local/bin/puma</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Alternatively, create a binstub with \`bundle binstubs puma --path ./sbin\` in the WorkingDirectory</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ExecStart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/home/ubuntu/.rbenv/shims/bundle exec puma -C /home/ubuntu/rails_product/config/puma.rb -b tcp://0.0.0.0:8080</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 定义服务失败时的重启策略</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Restart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WantedBy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">multi-user.target</span></span></code></pre></div><h4 id="uvicorn-配置用例" tabindex="-1">uvicorn 配置用例 <a class="header-anchor" href="#uvicorn-配置用例" aria-label="Permalink to &quot;uvicorn 配置用例&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Description</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fastapi_service</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">After</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">network.target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">User</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WorkingDirectory</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/home/ubuntu/fastapi_service</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ExecStart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/home/ubuntu/.local/bin/pipenv run python3 /home/ubuntu/fastapi_service/main.py</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Environment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PATH=/home/ubuntu/.pipenv/bin:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Restart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WantedBy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">multi-user.target</span></span></code></pre></div>`,22);function A(u,D,m,F,b,v){const l=t("Mermaid");return a(),p("div",null,[o,E,g,(a(),h(k,null,{default:i(()=>[d(l,{id:"mermaid-18",class:"mermaid",graph:"graph%20LR%0A%20%20%20%20B(Linux%20System)%0A%20%20%20%20A(Systemd)%0A%20%20%20%20A%20--Unit%20%E6%98%AF%E7%B3%BB%E7%BB%9F%E4%B8%AD%E5%8F%97%20systemd%20%E7%AE%A1%E7%90%86%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%AF%B9%E8%B1%A1--%3E%201((Unit))%0A%20%20%20%20A%20--Job%E9%80%9A%E5%B8%B8%E6%8C%87%E5%90%AF%E5%8A%A8%2C%E5%81%9C%E6%AD%A2%2C%E9%87%8D%E5%90%AF%E6%88%96%E9%87%8D%E6%96%B0%E5%8A%A0%E8%BD%BD%E6%9F%90%E4%B8%AA%E5%8D%95%E5%85%83%20Unit%20%E7%9A%84%E8%AF%B7%E6%B1%82--%3E%202((Job))%0A%0A%20%20%20%201%20--%3E%20B%0A%20%20%20%202%20--%E8%BF%90%E8%A1%8C%E5%AE%8C%E6%88%90--%3E%201%0A"})]),fallback:i(()=>[n(" Loading... ")]),_:1})),y])}const C=e(c,[["render",A]]);export{f as __pageData,C as default};
