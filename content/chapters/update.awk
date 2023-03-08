#!/usr/bin/awk -f

BEGIN {
	line = ""
	line_quote = ""
	in_paragraph = 0
}

/^#/ {
	for (i = 1; i <= NF; i++) {
		if ($i != 1 && ($i == "the" || $i == "of" || $i == "a" || $i == "an" || $i == "for")) {
			continue
		}
		else {
			$i = toupper(substr($i, 1, 1)) substr($i, 2)
		}
	}
}

/[ \t]+$/ {
	sub(/[ \t]+$/, "", $0);
}

/^>?[ \t]*$/ {
	if (line != "")
		print(line)
	if (line_quote != "")
		print(line_quote)
	line = ""
	line_quote = ""
	print
	next
}

/^>/ {
	new = $0
	sub(/^>[ \t]+/, "", new)
	if (line_quote == "")
		line_quote = ">"  " "  new
	else
		line_quote = line_quote " " new
	next
}

{
	if (line == "")
		line = $0
	else
		line = line " " $0
}

END {
	if (line != "")
		print(line)
	if (line_quote != "")
		print(line_quote)
}
