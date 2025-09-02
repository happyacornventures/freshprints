#!/bin/bash
# Usage: ./autoprint.sh <file-to-print> [printer-name]

FILE="$1"
PRINTER="$2"

if [ -z "$FILE" ]; then
  echo "Usage: $0 <file-to-print> [printer-name]"
  exit 1
fi

if [ -z "$PRINTER" ]; then
  # Use default printer
  lp "$FILE"
else
  lp -d "$PRINTER" "$FILE"
fi
