---
layout: post
title: Sorting Dependency Trees
category: development
tags: [algorithms, graphs, sorting]
excerpt: When we have a number of things to do with certain things needing to be done before others, how can we calculate the right order so that nothing gets done before it's ready to be done? The answer lies in graph theory and a very simple sort.
---

### The Problem
Let's imagine we have a group of Task objects that each perform a single task and that can express dependencies between one another.

{% highlight php startinline %}
class BakeCookies implements TaskInterface {
	public function dependencies() {
		return [ 'PreheatOven', 'PrepareCookieSheet', 'MixIngredients' ];
	}
	public function __invoke() { // do stuff }
}

class PrepareUtensils implements TaskInterface {
	public function __invoke() { // do stuff }
}

class PrepareCookieSheet implements TaskInterface {
	public function dependencies() {
		return [ 'PrepareUtensils' ];
	}
}

class MixIngredients implements TaskInterface {
	public function dependencies() {
		return [ 'PrepareUtensils', 'BuyIngredients' ];
	}
	public function __invoke() { // do stuff }
}

class BuyIngredients implements TaskInterface {
	public function __invoke() { // do stuff }
}

class PreheatOven implements TaskInterface {
    public function dependencies() {
    	return [ 'PrepareUtensils' ];
    }
	public function __invoke() { // do stuff }
}
{% endhighlight %}

---

### Drawing the Graph
We want to run our `MakeCookies` task, but before we can do that, we need to make sure its dependencies have run. Likewise we have to be sure that all of the dependencies' dependencies have run. 

If we draw it out, we come up with a pretty simple graph. Specifically, this is a Directed Acyclic Graph, so called because it is comprised of nodes that are connected by edges (directed), without any loops (acyclic).

<img class="center" alt="dag" src="http://i.imgur.com/sBoqA71.png" />

Viewing the graph in this way lets us see pretty clearly how our task's dependencies work out. Clearly we need to make sure that no task runs before its dependencies, but how do we figure out the best order to execute them?

---

###Topological Sorting
We're all used to sorting sets of data by size or alphabetically. Sorting is a powerful tool in the software engineer's arsenal, and when dealing with Directed Acyclic Graphs we're lucky enough to have a very powerful sort at our disposal.

The goal of a topological sort is to take a DAG and produce a linear list where for every directed edge _ev_ from vertex _e_ to vertex _v_, _e_ is sorted before _v_. Every DAG should have at least one (and possibly very many more!) possible orders. There are a number of difference algorithms for performing topological sorts, but for now we'll focus on one described by Arthur Kahn in 1962.

As listed in [Wikipedia](http://en.wikipedia.org/wiki/Topological_sorting):

{% highlight php %}
L ← Empty list that will contain the sorted elements
S ← Set of all nodes with no incoming edges
while S is non-empty do
    remove a node n from S
    add n to tail of L
    for each node m with an edge e from n to m do
        remove edge e from the graph
        if m has no other incoming edges then
            insert m into S
if graph has edges then
    return error (graph has at least one cycle)
else 
    return L (a topologically sorted order)
{% endhighlight %}

---

### Implementation
To apply this algorithm to our example, let's create a simple PHP data structure that describes all the edges and vertices in our graph. Vertices without edges are stored as strings (`BuyIngredients`) while vertices with edges are stored as array pairs of the form `[e,v]`. We do this because the algorithm relies on us being able to quickly identifiy non-edged vertices and by storing them this way, we can do that with a simple type check. Any element that is __not__ an array is an unedged vertex.

{% highlight php startinline %}
$graph = [
	['PrepareCookieSheet', 'BakeCookies'], 
	['PreheatOven', 'BakeCookies'], 
	['MixIngredients', 'BakeCookies'],
	['PrepareUtensils', 'PrepareCookieSheet'],
	['PrepareUtensils', 'PreheatOven'],
	['PrepareUtensils', 'MixIngredients'],
	['BuyIngredients', 'MixIngredients'],
	'PrepareUtensils',
	'BuyIngredients'
];
{% endhighlight %}

Now we can look at an implementation of the algorithm itself.

{% highlight php startinline %}
function topo_sort(array $graph)
{
	// Create empty lists for sorted and unsorted vertices/edges
	$unsorted = $sorted = [];

	// Move any non-edged nodes to the unsorted list. 
	// Nodes without edges should be run before any other
	// nodes, in no particular order.
	for ($i=count($graph)-1; $i>=0; $i--) {
		if (!is_array($graph[$i])) {			// Non-arrays are unedged vertices
			array_push($unsorted, array_splice($graph, $i, 1)[0]);
		}
	}

	// While there are vertices left to sort
	while(count($unsorted)) {

		// pull the first and push it on to the sorted list
		$n = array_shift($unsorted);
		array_push($sorted, $n);

		// loop backwards through remaining contexts
		for ($i=count($graph)-1; $i>=0; $i--) {
			// move nodes whose incoming edge has been moved to sorted 
			// to the unsorted list
			if(is_array($graph[$i]) && $graph[$i][0] === $n) {
				array_push($unsorted, array_splice($graph, $i, 1)[0][1]);
			}
		}
	}
	return array_unique($sorted);
}

{% endhighlight %}

Let's run our data through the sort.

{% highlight php startinline %}
var_dump(topo_sort($graph));

array(6) {
  [0] =>
  string(14) "BuyIngredients"
  [1] =>
  string(15) "PrepareUtensils"
  [2] =>
  string(14) "MixIngredients"
  [4] =>
  string(11) "PreheatOven"
  [5] =>
  string(18) "PrepareCookieSheet"
  [6] =>
  string(11) "BakeCookies"
}

{% endhighlight %}

We get an order for running our tasks that ensures that no task runs before its dependencies and in the end, that gets us just what we want.

<div style="text-align: center;"><div class="vignette center"><img class="vignette" alt="cookies!" src="http://i.imgur.com/iHMpUQM.jpg" /></div></p>
