#!/bin/bash
# Usage: ./autoprint.sh <file-to-print> [printer-name]

FILE="$1"

if [ -z "$FILE" ]; then
  echo "Usage: $0 <file-to-print> [printer-name]"
  exit 1
fi

lp "$FILE"
