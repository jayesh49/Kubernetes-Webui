function lw(x){
        var xhr = new XMLHttpRequest();
	var k = " --kubeconfig admin.conf"; 
	if (x === undefined){
		var i = document.getElementById("in1").value;
	}
	else{
		var i = x;
	}
        xhr.open("GET","http://192.168.99.101/cgi-bin/Kubernetes.py?x="+i,true);
        xhr.send();
        xhr.onload = function( ){
	var out = xhr.responseText;
	document.getElementById('id1').innerHTML = out;
                }
	document.getElementById('p1').innerHTML = "Write your code here:";
}

function pod() {
  var p = prompt("Please enter pod name", "mypod1");
  var im = prompt("Please enter image name", "httpd");
  var t=prompt("Please enter the tag of image","latest");
  lw("kubectl run "+p+" --image="+im+":"+t+" --kubeconfig admin.conf");
  lw("echo Creating pod please wait...");
}


function deploy() {
  var p = prompt("Please enter deploy name", "mydep1");
  var im = prompt("Please enter image name", "httpd");
  var t=prompt("Please enter the tag of image","latest");
  lw("kubectl create deployment "+p+" --image="+im+":"+t+" --kubeconfig admin.conf");
  lw("echo Creating deployment please wait...");
}

function exp() {
  var p = prompt("Please enter deploy name", "mydep1");
  var im = prompt("Please enter Port Number", "80");
  lw("kubectl expose deploy "+p+" --type=NodePort --port="+im+" --kubeconfig admin.conf");
  lw("echo Exposing deployment please wait...");
}


function rep() {
  var p = prompt("Please enter deploy name", "mydep1");
  var im = prompt("Please enter number of replicas", "3");
  lw("kubectl scale deployment "+p+" --replicas="+im+" --kubeconfig admin.conf");
  lw("echo Creating replicas please wait...");
}

function del() {
  var p = prompt("Please enter resource type", "pod/deploy/svc");
  var im = prompt("Please enter resource name", "mypod1")
  lw("kubectl delete "+p+" "+im+" --kubeconfig admin.conf");
  lw("echo please wait resource is deleting...");
}




