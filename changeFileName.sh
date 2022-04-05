#! /bin/bash

function changeToCamelCase () {
  local fileName=$1
  fileName=$( echo $fileName | cut -f1 -d'.' )
  local keywords=$( echo $fileName | tr '-' ' ' )
  local camelCaseWord+=$( echo $keywords | cut -f1 -d' ' )

  for word in $( cut -f2- -d' ' <<< $keywords ) ; do
    camelCaseWord+="$( tr '[:lower:]' '[:upper:]' <<< ${word:0:1} )${word:1}"
  done

  echo "${camelCaseWord}.js"
}

function changeFileNames() {
  local files=$( ls -1 *.js )

  for file in $files ; do
    mv "${file}" $( changeToCamelCase "${file}" )
  done
}

changeFileNames
