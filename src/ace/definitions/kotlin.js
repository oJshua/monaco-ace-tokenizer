/* eslint-disable */
/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2012, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

/* This file was autogenerated from Kotlin.tmLanguage (uuid: ) */
/****************************************************************************************
 * IT MIGHT NOT BE PERFECT ...But it's a good start from an existing *.tmlanguage file. *
 * fileTypes                                                                            *
 ****************************************************************************************/


var oop = require("../oop");
var TextHighlightRules = require("../text_highlight_rules").TextHighlightRules;

var KotlinHighlightRules = function() {
    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = {
        start: [{
            include: "#comments"
        }, {
            token: [
                "text",
                "keyword.other.kotlin",
                "text",
                "entity.name.package.kotlin",
                "text"
            ],
            regex: /^(\s*)(package)\b(?:(\s*)([^ ;$]+)(\s*))?/,
        }, {
            include: "#imports"
        }, {
            include: "#statements"
        }],
        "#classes": [{
            token: "text",
            regex: /(?=\s*(?:companion|class|object|interface))/,
            push: [{
                token: "text",
                regex: /}|(?=$)/,
                next: "pop"
            }, {
                token: ["keyword.other.kotlin", "text"],
                regex: /\b((?:companion\s*)?)(class|object|interface)\b/,
                push: [{
                    token: "text",
                    regex: /(?=<|{|\(|:)/,
                    next: "pop"
                }, {
                    token: "keyword.other.kotlin",
                    regex: /\bobject\b/
                }, {
                    token: "entity.name.type.class.kotlin",
                    regex: /\w+/
                }]
            }, {
                token: "text",
                regex: /</,
                push: [{
                    token: "text",
                    regex: />/,
                    next: "pop"
                }, {
                    include: "#generics"
                }]
            }, {
                token: "text",
                regex: /\(/,
                push: [{
                    token: "text",
                    regex: /\)/,
                    next: "pop"
                }, {
                    include: "#parameters"
                }]
            }, {
                token: "keyword.operator.declaration.kotlin",
                regex: /:/,
                push: [{
                    token: "text",
                    regex: /(?={|$)/,
                    next: "pop"
                }, {
                    token: "entity.other.inherited-class.kotlin",
                    regex: /\w+/
                }, {
                    token: "text",
                    regex: /\(/,
                    push: [{
                        token: "text",
                        regex: /\)/,
                        next: "pop"
                    }, {
                        include: "#expressions"
                    }]
                }]
            }, {
                token: "text",
                regex: /\{/,
                push: [{
                    token: "text",
                    regex: /\}/,
                    next: "pop"
                }, {
                    include: "#statements"
                }]
            }]
        }],
        "#comments": [{
            token: "punctuation.definition.comment.kotlin",
            regex: /\/\*/,
            push: [{
                token: "punctuation.definition.comment.kotlin",
                regex: /\*\//,
                next: "pop"
            }, {
                defaultToken: "comment.block.kotlin"
            }]
        }, {
            token: [
                "text",
                "punctuation.definition.comment.kotlin",
                "comment.line.double-slash.kotlin"
            ],
            regex: /(\s*)(\/\/)(.*$)/
        }],
        "#constants": [{
            token: "constant.language.kotlin",
            regex: /\b(?:true|false|null|this|super)\b/
        }, {
            token: "constant.numeric.kotlin",
            regex: /\b(?:0(?:x|X)[0-9a-fA-F]*|(?:[0-9]+\.?[0-9]*|\.[0-9]+)(?:(?:e|E)(?:\+|-)?[0-9]+)?)(?:[LlFfUuDd]|UL|ul)?\b/
        }, {
            token: "constant.other.kotlin",
            regex: /\b[A-Z][A-Z0-9_]+\b/
        }],
        "#expressions": [{
            token: "text",
            regex: /\(/,
            push: [{
                token: "text",
                regex: /\)/,
                next: "pop"
            }, {
                include: "#expressions"
            }]
        }, {
            include: "#types"
        }, {
            include: "#strings"
        }, {
            include: "#constants"
        }, {
            include: "#comments"
        }, {
            include: "#keywords"
        }],
        "#functions": [{
            token: "text",
            regex: /(?=\s*fun)/,
            push: [{
                token: "text",
                regex: /}|(?=$)/,
                next: "pop"
            }, {
                token: "keyword.other.kotlin",
                regex: /\bfun\b/,
                push: [{
                    token: "text",
                    regex: /(?=\()/,
                    next: "pop"
                }, {
                    token: "text",
                    regex: /</,
                    push: [{
                        token: "text",
                        regex: />/,
                        next: "pop"
                    }, {
                        include: "#generics"
                    }]
                }, {
                    token: ["text", "entity.name.function.kotlin"],
                    regex: /((?:[\.<\?>\w]+\.)?)(\w+)/
                }]
            }, {
                token: "text",
                regex: /\(/,
                push: [{
                    token: "text",
                    regex: /\)/,
                    next: "pop"
                }, {
                    include: "#parameters"
                }]
            }, {
                token: "keyword.operator.declaration.kotlin",
                regex: /:/,
                push: [{
                    token: "text",
                    regex: /(?={|=|$)/,
                    next: "pop"
                }, {
                    include: "#types"
                }]
            }, {
                token: "text",
                regex: /\{/,
                push: [{
                    token: "text",
                    regex: /(?=\})/,
                    next: "pop"
                }, {
                    include: "#statements"
                }]
            }, {
                token: "keyword.operator.assignment.kotlin",
                regex: /=/,
                push: [{
                    token: "text",
                    regex: /(?=$)/,
                    next: "pop"
                }, {
                    include: "#expressions"
                }]
            }]
        }],
        "#generics": [{
            token: "keyword.operator.declaration.kotlin",
            regex: /:/,
            push: [{
                token: "text",
                regex: /(?=,|>)/,
                next: "pop"
            }, {
                include: "#types"
            }]
        }, {
            include: "#keywords"
        }, {
            token: "storage.type.generic.kotlin",
            regex: /\w+/
        }],
        "#getters-and-setters": [{
            token: ["entity.name.function.kotlin", "text"],
            regex: /\b(get)\b(\s*\(\s*\))/,
            push: [{
                token: "text",
                regex: /\}|(?=\bset\b)|$/,
                next: "pop"
            }, {
                token: "keyword.operator.assignment.kotlin",
                regex: /=/,
                push: [{
                    token: "text",
                    regex: /(?=$|\bset\b)/,
                    next: "pop"
                }, {
                    include: "#expressions"
                }]
            }, {
                token: "text",
                regex: /\{/,
                push: [{
                    token: "text",
                    regex: /\}/,
                    next: "pop"
                }, {
                    include: "#expressions"
                }]
            }]
        }, {
            token: ["entity.name.function.kotlin", "text"],
            regex: /\b(set)\b(\s*)(?=\()/,
            push: [{
                token: "text",
                regex: /\}|(?=\bget\b)|$/,
                next: "pop"
            }, {
                token: "text",
                regex: /\(/,
                push: [{
                    token: "text",
                    regex: /\)/,
                    next: "pop"
                }, {
                    include: "#parameters"
                }]
            }, {
                token: "keyword.operator.assignment.kotlin",
                regex: /=/,
                push: [{
                    token: "text",
                    regex: /(?=$|\bset\b)/,
                    next: "pop"
                }, {
                    include: "#expressions"
                }]
            }, {
                token: "text",
                regex: /\{/,
                push: [{
                    token: "text",
                    regex: /\}/,
                    next: "pop"
                }, {
                    include: "#expressions"
                }]
            }]
        }],
        "#imports": [{
            token: [
                "text",
                "keyword.other.kotlin",
                "text",
                "keyword.other.kotlin"
            ],
            regex: /^(\s*)(import)(\s+[^ $]+)((?:as)?)/
        }],
        "#keywords": [{
            token: "storage.modifier.kotlin",
            regex: /\b(?:var|val|public|private|protected|abstract|final|enum|open|attribute|annotation|override|inline|var|val|vararg|lazy|in|out|internal|data|tailrec|operator|infix|const|yield|typealias|typeof)\b/
        }, {
            token: "keyword.control.catch-exception.kotlin",
            regex: /\b(?:try|catch|finally|throw)\b/
        }, {
            token: "keyword.control.kotlin",
            regex: /\b(?:if|else|while|for|do|return|when|where|break|continue)\b/
        }, {
            token: "keyword.operator.kotlin",
            regex: /\b(?:in|is|as|assert)\b/
        }, {
            token: "keyword.operator.comparison.kotlin",
            regex: /==|!=|===|!==|<=|>=|<|>/
        }, {
            token: "keyword.operator.assignment.kotlin",
            regex: /=/
        }, {
            token: "keyword.operator.declaration.kotlin",
            regex: /:/
        }, {
            token: "keyword.operator.dot.kotlin",
            regex: /\./
        }, {
            token: "keyword.operator.increment-decrement.kotlin",
            regex: /\-\-|\+\+/
        }, {
            token: "keyword.operator.arithmetic.kotlin",
            regex: /\-|\+|\*|\/|%/
        }, {
            token: "keyword.operator.arithmetic.assign.kotlin",
            regex: /\+=|\-=|\*=|\/=/
        }, {
            token: "keyword.operator.logical.kotlin",
            regex: /!|&&|\|\|/
        }, {
            token: "keyword.operator.range.kotlin",
            regex: /\.\./
        }, {
            token: "punctuation.terminator.kotlin",
            regex: /;/
        }],
        "#namespaces": [{
            token: "keyword.other.kotlin",
            regex: /\bnamespace\b/
        }, {
            token: "text",
            regex: /\{/,
            push: [{
                token: "text",
                regex: /\}/,
                next: "pop"
            }, {
                include: "#statements"
            }]
        }],
        "#parameters": [{
            token: "keyword.operator.declaration.kotlin",
            regex: /:/,
            push: [{
                token: "text",
                regex: /(?=,|\)|=)/,
                next: "pop"
            }, {
                include: "#types"
            }]
        }, {
            token: "keyword.operator.declaration.kotlin",
            regex: /=/,
            push: [{
                token: "text",
                regex: /(?=,|\))/,
                next: "pop"
            }, {
                include: "#expressions"
            }]
        }, {
            include: "#keywords"
        }, {
            token: "variable.parameter.function.kotlin",
            regex: /\w+/
        }],
        "#statements": [{
            include: "#namespaces"
        }, {
            include: "#typedefs"
        }, {
            include: "#classes"
        }, {
            include: "#functions"
        }, {
            include: "#variables"
        }, {
            include: "#getters-and-setters"
        }, {
            include: "#expressions"
        }],
        "#strings": [{
            token: "punctuation.definition.string.begin.kotlin",
            regex: /"""/,
            push: [{
                token: "punctuation.definition.string.end.kotlin",
                regex: /"""/,
                next: "pop"
            }, {
                token: "variable.parameter.template.kotlin",
                regex: /\$\w+|\$\{[^\}]+\}/
            }, {
                token: "constant.character.escape.kotlin",
                regex: /\\./
            }, {
                defaultToken: "string.quoted.third.kotlin"
            }]
        }, {
            token: "punctuation.definition.string.begin.kotlin",
            regex: /"/,
            push: [{
                token: "punctuation.definition.string.end.kotlin",
                regex: /"/,
                next: "pop"
            }, {
                token: "variable.parameter.template.kotlin",
                regex: /\$\w+|\$\{[^\}]+\}/
            }, {
                token: "constant.character.escape.kotlin",
                regex: /\\./
            }, {
                defaultToken: "string.quoted.double.kotlin"
            }]
        }, {
            token: "punctuation.definition.string.begin.kotlin",
            regex: /'/,
            push: [{
                token: "punctuation.definition.string.end.kotlin",
                regex: /'/,
                next: "pop"
            }, {
                token: "constant.character.escape.kotlin",
                regex: /\\./
            }, {
                defaultToken: "string.quoted.single.kotlin"
            }]
        }, {
            token: "punctuation.definition.string.begin.kotlin",
            regex: /`/,
            push: [{
                token: "punctuation.definition.string.end.kotlin",
                regex: /`/,
                next: "pop"
            }, {
                defaultToken: "string.quoted.single.kotlin"
            }]
        }],
        "#typedefs": [{
            token: "text",
            regex: /(?=\s*type)/,
            push: [{
                token: "text",
                regex: /(?=$)/,
                next: "pop"
            }, {
                token: "keyword.other.kotlin",
                regex: /\btype\b/
            }, {
                token: "text",
                regex: /</,
                push: [{
                    token: "text",
                    regex: />/,
                    next: "pop"
                }, {
                    include: "#generics"
                }]
            }, {
                include: "#expressions"
            }]
        }],
        "#types": [{
            token: "storage.type.buildin.kotlin",
            regex: /\b(?:Any|Unit|String|Int|Boolean|Char|Long|Double|Float|Short|Byte|dynamic)\b/
        }, {
            token: "storage.type.buildin.array.kotlin",
            regex: /\b(?:IntArray|BooleanArray|CharArray|LongArray|DoubleArray|FloatArray|ShortArray|ByteArray)\b/
        }, {
            token: [
                "storage.type.buildin.collection.kotlin",
                "text"
            ],
            regex: /\b(Array|List|Map)(<\b)/,
            push: [{
                token: "text",
                regex: />/,
                next: "pop"
            }, {
                include: "#types"
            }, {
                include: "#keywords"
            }]
        }, {
            token: "text",
            regex: /\w+</,
            push: [{
                token: "text",
                regex: />/,
                next: "pop"
            }, {
                include: "#types"
            }, {
                include: "#keywords"
            }]
        }, {
            token: ["keyword.operator.tuple.kotlin", "text"],
            regex: /(#)(\()/,
            push: [{
                token: "text",
                regex: /\)/,
                next: "pop"
            }, {
                include: "#expressions"
            }]
        }, {
            token: "text",
            regex: /\{/,
            push: [{
                token: "text",
                regex: /\}/,
                next: "pop"
            }, {
                include: "#statements"
            }]
        }, {
            token: "text",
            regex: /\(/,
            push: [{
                token: "text",
                regex: /\)/,
                next: "pop"
            }, {
                include: "#types"
            }]
        }, {
            token: "keyword.operator.declaration.kotlin",
            regex: /->/
        }],
        "#variables": [{
            token: "text",
            regex: /(?=\s*(?:var|val))/,
            push: [{
                token: "text",
                regex: /(?=:|=|$)/,
                next: "pop"
            }, {
                token: "keyword.other.kotlin",
                regex: /\b(?:var|val)\b/,
                push: [{
                    token: "text",
                    regex: /(?=:|=|$)/,
                    next: "pop"
                }, {
                    token: "text",
                    regex: /</,
                    push: [{
                        token: "text",
                        regex: />/,
                        next: "pop"
                    }, {
                        include: "#generics"
                    }]
                }, {
                    token: ["text", "entity.name.variable.kotlin"],
                    regex: /((?:[\.<\?>\w]+\.)?)(\w+)/
                }]
            }, {
                token: "keyword.operator.declaration.kotlin",
                regex: /:/,
                push: [{
                    token: "text",
                    regex: /(?==|$)/,
                    next: "pop"
                }, {
                    include: "#types"
                }, {
                    include: "#getters-and-setters"
                }]
            }, {
                token: "keyword.operator.assignment.kotlin",
                regex: /=/,
                push: [{
                    token: "text",
                    regex: /(?=$)/,
                    next: "pop"
                }, {
                    include: "#expressions"
                }, {
                    include: "#getters-and-setters"
                }]
            }]
        }]
    };
    
    this.normalizeRules();
};

KotlinHighlightRules.metaData = {
    fileTypes: ["kt", "kts"],
    name: "Kotlin",
    scopeName: "source.Kotlin"
};


oop.inherits(KotlinHighlightRules, TextHighlightRules);

export default KotlinHighlightRules;
