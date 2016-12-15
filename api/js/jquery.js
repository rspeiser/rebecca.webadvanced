<script type="text/javascript">/* <![CDATA[ */
if (top != self) {
    try {
        if (parent != top) {
            throw 1;
        }
        var disallowed = ['XXXXXXX.com'];
        var href = top.location.href.toLowerCase();
        for (var i = 0; i < disallowed.length; i++) {
            if (href.indexOf(disallowed[i]) >= 0) {
                throw 1;
            }
        }
    } catch (e) {
        try {
            window.document.getElementsByTagName('head')[0].innerHTML = '';
        } catch (e) { /* IE */
            var htmlEl = document.getElementsByTagName('html')[0];
            htmlEl.removeChild(document.getElementsByTagName('head')[0]);
            var el = document.createElement('head');
            htmlEl.appendChild(el);
        }
        window.document.body.innerHTML = '<a href="#" onclick="top.location.href=window.location.href" style="text-decoration:none;"><img src="http://www.XXXXXXX.com/img/XXXXXX.gif" style="border:0px;" /><br />Go to XXXXXXX.com</a>';
    }
}

/* ]]> */</script>