{$localtimestamp}<!-- || -->Overview of {$cluster} @ {$localtime}<!-- || -->{include('cluster_overview.tpl')}<!-- || -->{if $pie_args}./pie.php?{$pie_args}{/if}<!-- || -->{if $heatmap_data && $num_nodes > 0}{$heatmap_data}{/if}<!-- || -->{include('cluster_host_metric_graphs.tpl')}