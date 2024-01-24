/* Copyright 2012 The Go Authors.   All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
'use strict';

angular.module('tour.values', []).

// List of modules with description and lessons in it.
value('tableOfContents', [{
    'id': 'welcome',
    'title': '',
    'description': `<p>ส่วนนี้คือเนื้อหาสำหรับนักพัฒนาระดับกลางผู้ซึ่งมีประสบการกับการเขียนโปรแกรมในภาษาต่างๆ และต้องการศึกษาภาษา Go เราเชื่อว่าเนื้อหาในที่นี้นั้นเหมาะสมสำหรับใครก็ตามที่ต้องการเริ่มต้นกับการเรียนภาษา Go หรือ ใครก็ตามที่ต้องการทำความเข้าใจเกี่ยวกับภาษาและภายในของ Go อย่างลึกซึ้งยิ่งขึ้น</p>
    <p><b>ซึ่งในครั้งแรกของการรันตัวอย่างนั้น จะใช้เวลานานสักนิดหนึ่งจนกระทั่งรันเสร็จสิ้น ทั้งนี้เพราะว่า Tour Service ของเราไม่ได้ทำการรันตลอดเวลา ดังนั้นโปรดให้เวลามันสักหน่อยจนกว่ามันจะรันจนเสร็จสิ้น</b></p>
    `,
    'lessons': [
        'welcome',
    ]
}, {
    'id': 'language-mechanics',
    'title': 'รูปแบบของภาษา',
    'description': `
        <p>สำหรับเนื้อหาการเรียนนี้ครอบคลุมไปจนถึง syntax ของภาษา, รูปแบบและวิธีการเขียน ข้อจำกัดไปจนถึงการประยุกต์ใช้ ซึ่งหลังจากที่คุณทำการเรียนเสร็จแล้ว คุณจะสามารถเข้าใจกลไกลของรูปแบบภาษา และความเข้ากันได้ระหว่างภาษาและฮาร์ดแวร์ไปจนถึงระบบปฏิบัติการ</p>
        `,
    'lessons': [
        'variables',
        'struct-types', 
        'pointers', 
        'constants',
        'functions',
        'arrays',
        'slices',
        'maps',
        'methods',
        'interfaces',
        'embedding',
        'exporting',
    ]
}, {
    'id': 'composition-interfaces',
    'title': 'Composition and Interfaces',
    'description': `
        <p>This material covers the practical things you need to know about composition and interfaces.</p>
        `,
    'lessons': [
        'composition-grouping',
        'composition-assertions',
        'composition-pollution',
        'composition-mocking',
        'composition-decoupling',
        'error-handling',
    ]
},{
    'id': 'concurrency',
    'title': 'Concurrency',
    'description': `
        <p>This material covers all the concurrency aspects of the language. Once you are done with this material you will understand the concurrent mechanics of the language and mechanical sympathies the language has for both the hardware and operating system as it related to concurrency.</p>
       `,
    'lessons': [
        'goroutines',
        'data_race',
        'context',
        'channels',
    ]
},{
    'id': 'generics',
    'title': 'Generics',
    'description': `
        <p>This material covers all the generics aspects of the language. Generics is about providing the ability to write concrete polymorphic functions with the support of type parameter lists.</p>
       `,
    'lessons': [
        'generics-basics',
        'generics-underlying-types',
        'generics-struct-types',
        'generics-behavior-constraints',
        'generics-type-constraints',
        'generics-multi-type-params',
        'generics-slice-constraints',
        'generics-channels',
        'generics-hash-table',
    ]
},{
    'id': 'algorithms',
    'title': 'Algorithms',
    'description': `
        <p>This material provides Go code implementing a common and fun set of algorithms.</p>
       `,
    'lessons': [
        'algorithms-bits-seven',
        'algorithms-strings',
        'algorithms-numbers',
        'algorithms-slices',
        'algorithms-sorting',
        'algorithms-data',
        'algorithms-searches',
        'algorithms-fun',
    ]
}]).
// translation
value('translation', {
    'off': 'off',
    'on': 'on',
    'syntax': 'Syntax-Highlighting',
    'lineno': 'Line-Numbers',
    'reset': 'Reset Slide',
    'format': 'Format Source Code',
    'kill': 'Kill Program',
    'run': 'Run',
    'compile': 'Compile and Run',
    'more': 'Options',
    'toc': 'Table of Contents',
    'prev': 'Previous',
    'next': 'Next',
    'waiting': 'Waiting for remote server...',
    'errcomm': 'Error communicating with remote server.',
    'submit-feedback': 'Send feedback about this page',
    'search': 'Search for content',

    // GitHub issue template: update repo and messaging when translating.
    'github-repo': 'github.com/ardanlabs/gotour',
    'issue-title': 'tour: [REPLACE WITH SHORT DESCRIPTION]',
    'issue-message': 'Change the title above to describe your issue and add your feedback here, including code if necessary',
    'context': 'Context',
}).

// Config for codemirror plugin
value('ui.config', {
    codemirror: {
        mode: 'text/x-go',
        matchBrackets: true,
        lineNumbers: true,
        autofocus: true,
        indentWithTabs: true,
        indentUnit: 4,
        tabSize: 4,
        lineWrapping: true,
        extraKeys: {
            'Shift-Enter': function() {
                $('#run').click();
            },
            'Ctrl-Enter': function() {
                $('#format').click();
            },
            'PageDown': function() {
                return false;
            },
            'PageUp': function() {
                return false;
            },
        },
        // TODO: is there a better way to do this?
        // AngularJS values can't depend on factories.
        onChange: function() {
            if (window.codeChanged !== null) window.codeChanged();
        }
    }
}).

// mapping from the old paths (#42) to the new organization.
// The values have been generated with the map.sh script in the tools directory.
value('mapping', {
    '#1': '/variables/1', // Variables
});
