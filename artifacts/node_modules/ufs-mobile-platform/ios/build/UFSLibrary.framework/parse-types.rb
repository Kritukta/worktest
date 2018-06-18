#!/usr/bin/env ruby
require 'json'

file = File.open("MIMETypes.json", "rb")
contents = file.read
mimeHash = JSON.parse(contents)
p "constants"
mimeHash.each do |key, array|
    array.each do |value|
        printf "NSString *const kUFSFileType#{value.upcase} = @\"#{value}\"\;\n" 
    end
end

p "Enum"
mimeHash.each do |key, array|
    array.each do |value|
        printf "UFSFileType#{value.upcase}\,\n" 
    end
end

p "Mapping"
mimeHash.each do |key, array|
    array.each do |value|
        printf "@(UFSFileType#{value.upcase}): kUFSFileType#{value.upcase}\,\n" 
    end
end