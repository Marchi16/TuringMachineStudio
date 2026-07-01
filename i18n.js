// ===============================
// I18N - LANGUAGE SWITCHING
// ===============================

const translations = {

    el: {

        // ---- SHARED / NAVBAR ----
        tagline: "Διαδραστική Πλατφόρμα Εκμάθησης",

        nav_home: "Αρχική",
        nav_simulator: "Προσομοιωτής",
        nav_builder: "Κατασκευή",
        nav_theory: "Θεωρία",
        nav_examples: "Παραδείγματα",
        nav_exercises: "Ασκήσεις",
        nav_about: "Σχετικά",

        // ---- INDEX PAGE ----
        hero_title_main: "Μάθε Μηχανές Turing",
        hero_title_highlight: "Διαδραστικά",
        hero_desc: "Σχεδίασε, προσομοίωσε και οπτικοποίησε Μηχανές Turing μέσα από ένα διαισθητικό εκπαιδευτικό περιβάλλον.",
        btn_launch_sim: "Εκκίνηση Προσομοιωτή",
        btn_view_examples: "Δες Παραδείγματα",

        mock_state_label: "Κατάσταση",

        features_heading: "Χαρακτηριστικά",
        card_simulator_title: "Προσομοιωτής",
        card_simulator_desc: "Εκτέλεσε οποιαδήποτε Μηχανή Turing βήμα-βήμα.",
        card_builder_title: "Κατασκευή Μηχανής",
        card_builder_desc: "Φτιάξε τη δική σου μηχανή οπτικά.",
        card_theory_title: "Θεωρία",
        card_theory_desc: "Μάθε κάθε έννοια με παραδείγματα.",
        card_exercises_title: "Ασκήσεις",
        card_exercises_desc: "Εξασκήσου με διαδραστικές ασκήσεις.",
        card_visualization_title: "Οπτικοποίηση",
        card_visualization_desc: "Παρακολούθησε την κίνηση της ταινίας και τις μεταβάσεις καταστάσεων.",
        card_export_title: "Εξαγωγή",
        card_export_desc: "Αποθήκευσε τις μηχανές σου και μοιράσου τις.",

        roadmap_heading: "Ενότητες Πλατφόρμας",
        roadmap_exercises: "Ασκήσεις",
        roadmap_challenges: "Προκλήσεις",

        footer_dept: "Τμήμα Μηχανικών Η/Υ & Πληροφορικής",
        footer_university: "Πανεπιστήμιο Πατρών",

        help_title_home: "Πώς να χρησιμοποιήσεις την πλατφόρμα",
        help_home_1: "Πήγαινε στην «Κατασκευή» για να φτιάξεις τη δική σου Μηχανή Turing οπτικά.",
        help_home_2: "Χρησιμοποίησε τον «Προσομοιωτή» για να τρέξεις και να δεις βήμα-βήμα μια μηχανή.",
        help_home_3: "Στη «Θεωρία» θα βρεις εξηγήσεις και παραδείγματα για κάθε έννοια.",
        help_home_4: "Στις «Ασκήσεις» μπορείς να εξασκηθείς με διαδραστικά προβλήματα.",

        // ---- BUILDER PAGE ----
        builder_title: "Κατασκευή Μηχανής",
        builder_subtitle: "Δημιούργησε μια Μηχανή Turing οπτικά.",

        panel_graph: "Γράφημα Μηχανής",
        btn_add_state: "➕ Προσθήκη Κατάστασης",
        btn_add_transition: "Προσθήκη Μετάβασης",
        btn_delete: "🗑 Διαγραφή",

        panel_transitions: "Μεταβάσεις",
        ph_read: "Ανάγνωση",
        ph_write: "Εγγραφή",
        move_left: "Αριστερά",
        move_right: "Δεξιά",
        move_stay: "Παραμονή",

        th_from: "Από",
        th_read: "Ανάγνωση",
        th_write: "Εγγραφή",
        th_move: "Κίνηση",
        th_to: "Προς",

        panel_json: "JSON Μηχανής",

        btn_save: "Αποθήκευση Μηχανής",
        btn_clear: "Καθαρισμός",
        btn_open_sim: "Άνοιγμα Προσομοιωτή",

        ctx_start: "🟢 Ορισμός Αρχικής",
        ctx_accept: "✅ Ορισμός Αποδοχής",
        ctx_reject: "❌ Ορισμός Απόρριψης",

        help_title_builder: "Πώς να χρησιμοποιήσεις τον Builder",
        help_builder_1: "Πάτησε «Προσθήκη Κατάστασης» για να δημιουργήσεις νέα κατάσταση.",
        help_builder_2: "Κάνε δεξί κλικ σε μια κατάσταση για να την ορίσεις ως Αρχική, Αποδοχής ή Απόρριψης.",
        help_builder_3: "Επίλεξε Από/Προς καταστάσεις, συμπλήρωσε Ανάγνωση/Εγγραφή/Κίνηση, και πάτησε «Προσθήκη Μετάβασης».",
        help_builder_4: "Χρησιμοποίησε «Αποθήκευση Μηχανής» για να σώσεις τη δουλειά σου, και μετά «Άνοιγμα Προσομοιωτή» για να την τρέξεις.",
        help_builder_5: "Χρησιμοποίησε «Καθαρισμός» για να διαγράψεις τα πάντα και να ξεκινήσεις από την αρχή.",

        help_tooltip: "Βοήθεια",

        // el:
        help_title_simulator: "Πώς να χρησιμοποιήσεις τον Simulator",
        help_simulator_1: "Η μηχανή που αποθήκευσες στον Builder φορτώνεται αυτόματα εδώ.",
        help_simulator_2: "Γράψε μια αρχική συμβολοσειρά στην ταινία και πάτησε «Φόρτωση Εισόδου».",
        help_simulator_3: "Χρησιμοποίησε «Βήμα» για να εκτελέσεις τη μηχανή ένα βήμα τη φορά, ή «Εκτέλεση» για να τρέξει αυτόματα.",
        help_simulator_4: "Παρακολούθησε την τρέχουσα κατάσταση, την κεφαλή και την ταινία σε πραγματικό χρόνο.",
        help_simulator_5: "Όταν η μηχανή σταματήσει, θα δεις αν η είσοδος έγινε αποδοχή ή απόρριψη. Πάτησε «Επαναφορά» για να ξεκινήσεις από την αρχή.",

        input_tape:"Ταινία Εισόδου",
        input_example:"Παράδειγμα: aabb",
        tape: "Ταινία",
        explain_mode:"Εξήγηση Λειτουργίας",
        load_button:"Φόρτωση Μηχανής",
        step_button:"Βήμα",
        run_button:"Εκτέλεση",
        reset_button:"Επαναφορά",
        current_state:"Τρέχουσα Κατάσταση",
        head_position: "Αρχική θέση",
        steps:"Βήματα",
        explanation_box: "Φορτώστε μια μηχανή για να ξεκινήσετε.",
        machine_definition:"Ορισμός μηχανής",
         tm_simulator:"Προσομοιωτής Μηχανής Turing",

        explain_loaded: "Η μηχανή φορτώθηκε. Πάτησε «Βήμα» ή «Εκτέλεση».",
        explain_step: "Η κατάσταση {from} διάβασε «{symbol}», έγραψε «{write}», κινήθηκε {move}, και πέρασε στην κατάσταση {to}.",
        explain_accept: "Η μηχανή σταμάτησε στην κατάσταση {state} — Αποδοχή ✅",
        explain_reject: "Η μηχανή σταμάτησε στην κατάσταση {state} — Απόρριψη ❌",
        explain_no_machine: "Φόρτωσε πρώτα μια μηχανή.",
        explain_too_many_steps: "Η μηχανή ξεπέρασε το όριο βημάτων χωρίς να σταματήσει (πιθανός βρόχος).",

        template_label: "Έτοιμα Πρότυπα:",
        template_none: "-- Επίλεξε πρότυπο --",
        template_palindrome: "Έλεγχος Παλίνδρομου (a,b)",
        template_reverse: "Αντιστροφή Συμβολοσειράς (a,b)",

        machine_info_title: "Πληροφορίες Μηχανής",
        language_label: "Γλώσσα",
        language_placeholder: "Παράδειγμα: L = { aⁿbⁿ }",
        description_label: "Περιγραφή",
        description_placeholder: "Περιγράψτε τον τρόπο λειτουργίας της μηχανής...",
        author_label: "Δημιουργός",
        author_placeholder: "Το όνομά σας",
        machine_information:"Πληροφορίες Μηχανής",
        open_simulator:"Άνοιγμα Προσωμοιωτή",
        clear_machine:"Καθαρισμός",
        save_machine:"Αποθήκευση Μηχανής",
        machine_json:"JSON Μηχανής",
        machine_graph:"Γράφος Μηχανής",
        transitions:"Μεταβάσεις",
        machine_saved:"Η μηχανή αποθηκεύτηκε",
        machine_imported:"Η μηχανή φορτώθηκε",

        theory_title: "Θεωρία Μηχανών Turing",
        theory_subtitle: "Μάθε τις βασικές έννοιες των Μηχανών Turing μέσα από απλές εξηγήσεις και παραδείγματα.",

        theory_intro_title: "Τι είναι μια Μηχανή Turing;",
        theory_intro_text: "Η Μηχανή Turing είναι ένα θεωρητικό υπολογιστικό μοντέλο που αποτελείται από μια άπειρη ταινία, μια κεφαλή ανάγνωσης/εγγραφής και ένα σύνολο καταστάσεων. Αποτελεί το θεμέλιο της θεωρίας υπολογισμού.",

        theory_introduction_title:"Εισαγωγή",

        theory_parts_title: "Βασικά Συστατικά",
        theory_parts_tape: "Ταινία: αποθηκεύει τα σύμβολα της εισόδου και της εξόδου.",
        theory_parts_head: "Κεφαλή: διαβάζει, γράφει και μετακινείται στην ταινία.",
        theory_parts_states: "Καταστάσεις: περιγράφουν τη λειτουργία της μηχανής.",
        theory_parts_transition: "Συνάρτηση μετάβασης: καθορίζει τι κάνει η μηχανή σε κάθε βήμα.",

        theory_operation_title: "Πώς λειτουργεί;",
        theory_operation_1: "Διαβάζει το σύμβολο κάτω από την κεφαλή.",
        theory_operation_2: "Επιλέγει τη σωστή μετάβαση.",
        theory_operation_3: "Γράφει νέο σύμβολο στην ταινία.",
        theory_operation_4: "Μετακινεί την κεφαλή αριστερά, δεξιά ή παραμένει.",
        theory_operation_5: "Μεταβαίνει στην επόμενη κατάσταση.",
        theory_operation_6: "Επαναλαμβάνει μέχρι να σταματήσει.",

        theory_example_title: "Παράδειγμα",
        theory_example_text: "Για τη γλώσσα L = { aⁿbⁿ }, η μηχανή μαρκάρει κάθε 'a' με 'X', βρίσκει το αντίστοιχο 'b' και το μαρκάρει με 'Y'. Όταν όλα τα σύμβολα μαρκαριστούν, η είσοδος γίνεται αποδεκτή.",

        theory_next_title: "Επόμενο Βήμα",
        theory_next_text: "Αφού κατανοήσεις τη θεωρία, μπορείς να χρησιμοποιήσεις τον Builder για να δημιουργήσεις τις δικές σου μηχανές και τον Simulator για να τις δοκιμάσεις.",

        theory_title:"Θεωρία Μηχανών Turing",
        about_title:"Σχετικά με την Πλατφόρμα",

        about_subtitle:"Γνώρισε την εφαρμογή, τις δυνατότητές της και τον σκοπό δημιουργίας της.",

        about_project_title:"Το Έργο",

        about_project_text:"Το Turing Machine Studio είναι μια διαδραστική εκπαιδευτική εφαρμογή που βοηθά τους φοιτητές να κατανοήσουν τις Μηχανές Turing μέσα από οπτική κατασκευή, προσομοίωση και θεωρία.",

        about_goal_title:"Στόχος",

        about_goal_text:"Στόχος της εφαρμογής είναι να κάνει την εκμάθηση των Μηχανών Turing πιο εύκολη, διαδραστική και κατανοητή, συνδυάζοντας θεωρία, σχεδίαση και προσομοίωση σε ένα ενιαίο περιβάλλον.",

        about_features_title:"Δυνατότητες",

        about_feature1:"Οπτική κατασκευή Μηχανών Turing",

        about_feature2:"Προσομοίωση βήμα-βήμα",

        about_feature3:"Explain Mode",

        about_feature4:"Έτοιμα πρότυπα μηχανών",

        about_feature5:"Εισαγωγή / Εξαγωγή μηχανών",

        about_feature6:"Υποστήριξη Ελληνικών και Αγγλικών",

        about_tech_title:"Τεχνολογίες",

        about_university_title:"Πανεπιστήμιο",

        about_university_text:"Η εφαρμογή αναπτύχθηκε ως πανεπιστημιακή εργασία στο πλαίσιο του μαθήματος των Μηχανών Turing.",

        about_author_title:"Δημιουργός",

        about_author_text:"Η εφαρμογή αναπτύχθηκε για εκπαιδευτικούς σκοπούς με στόχο την καλύτερη κατανόηση της θεωρίας και της λειτουργίας των Μηχανών Turing.",

        // HELP

        help_title_about:"Πώς να χρησιμοποιήσεις τη σελίδα",

        help_about_1:"Διάβασε πληροφορίες για την εφαρμογή και τον σκοπό της.",

        help_about_2:"Μάθε ποιες τεχνολογίες χρησιμοποιήθηκαν.",

        help_about_3:"Δες όλες τις δυνατότητες που προσφέρει η πλατφόρμα.",

        help_about_4:"Χρησιμοποίησε το μενού για να μεταβείς στις υπόλοιπες ενότητες.",

        examples_title: "Παραδείγματα Μηχανών Turing",

        examples_subtitle: "Δοκίμασε έτοιμες Μηχανές Turing και φόρτωσέ τες απευθείας στον προσομοιωτή.",

        difficulty_beginner: "Αρχάριος",

        difficulty_intermediate: "Μεσαίο",

        difficulty_advanced: "Προχωρημένο",

        example_anbn: "Αναγνωρίζει συμβολοσειρές της μορφής aⁿbⁿ.",

        example_palindrome: "Ελέγχει αν μία συμβολοσειρά είναι παλίνδρομο.",

        example_reverse: "Αντιστρέφει μία συμβολοσειρά πάνω στην ταινία.",

        example_equal: "Αναγνωρίζει συμβολοσειρές της μορφής 0ⁿ1ⁿ.",

        load_example: "Φόρτωση στον Προσομοιωτή",

        help_title_examples: "Πώς να χρησιμοποιήσεις τα Παραδείγματα",

        help_examples_1: "Επίλεξε ένα έτοιμο παράδειγμα.",

        help_examples_2: "Πάτησε «Φόρτωση στον Προσομοιωτή».",

        help_examples_3: "Η μηχανή θα ανοίξει αυτόματα στον Simulator.",

        help_examples_4: "Δοκίμασε διαφορετικές εισόδους για να παρατηρήσεις τη λειτουργία της.",
        level_beginner:"Αρχάριος",
        level_intermediate:"Μεσαίο",
        level_advanced:"Προχωρημένο",

        difficulty:"Δυσκολία:",

        example_ab_desc:"Αναγνωρίζει συμβολοσειρές της μορφής aⁿbⁿ.",
        example_pal_desc:"Ελέγχει αν μια συμβολοσειρά είναι παλίνδρομο.",
        example_reverse_desc:"Αντιστρέφει μια συμβολοσειρά πάνω στην ταινία.",
        example_01_desc:"Αναγνωρίζει ίσο αριθμό από 0 και 1.",

        load_simulator:"Άνοιγμα στον Προσομοιωτή",


    },

    en: {

        // ---- SHARED / NAVBAR ----
        tagline: "Interactive Learning Platform",

        nav_home: "Home",
        nav_simulator: "Simulator",
        nav_builder: "Builder",
        nav_theory: "Theory",
        nav_examples: "Examples",
        nav_exercises: "Exercises",
        nav_about: "About",

        // ---- INDEX PAGE ----
        hero_title_main: "Learn Turing Machines",
        hero_title_highlight: "Interactively",
        hero_desc: "Design, simulate and visualize Turing Machines through an intuitive educational environment.",
        btn_launch_sim: "Launch Simulator",
        btn_view_examples: "View Examples",

        mock_state_label: "State",

        features_heading: "Features",
        card_simulator_title: "Simulator",
        card_simulator_desc: "Execute any Turing Machine step-by-step.",
        card_builder_title: "Machine Builder",
        card_builder_desc: "Build your own machine visually.",
        card_theory_title: "Theory",
        card_theory_desc: "Learn every concept with examples.",
        card_exercises_title: "Exercises",
        card_exercises_desc: "Practice using interactive assignments.",
        card_visualization_title: "Visualization",
        card_visualization_desc: "Observe tape movement and state transitions.",
        card_export_title: "Export",
        card_export_desc: "Save your machines and share them.",

        roadmap_heading: "Platform Modules",
        roadmap_exercises: "Exercises",
        roadmap_challenges: "Challenges",

        footer_dept: "Department of Computer Engineering & Informatics",
        footer_university: "University of Patras",

        help_title_home: "How to use the platform",
        help_home_1: "Go to \"Builder\" to create your own Turing Machine visually.",
        help_home_2: "Use the \"Simulator\" to run and step through a machine.",
        help_home_3: "In \"Theory\" you'll find explanations and examples for every concept.",
        help_home_4: "In \"Exercises\" you can practice with interactive problems.",

        // ---- BUILDER PAGE ----
        builder_title: "Machine Builder",
        builder_subtitle: "Create a Turing Machine visually.",

        panel_graph: "Machine Graph",
        btn_add_state: "➕ Add State",
        btn_add_transition: "Add Transition",
        btn_delete: "🗑 Delete",

        panel_transitions: "Transitions",
        ph_read: "Read",
        ph_write: "Write",
        move_left: "Left",
        move_right: "Right",
        move_stay: "Stay",

        th_from: "From",
        th_read: "Read",
        th_write: "Write",
        th_move: "Move",
        th_to: "To",

        panel_json: "Machine JSON",

        btn_save: "Save Machine",
        btn_clear: "Clear",
        btn_open_sim: "Open Simulator",

        ctx_start: "🟢 Set Start",
        ctx_accept: "✅ Set Accept",
        ctx_reject: "❌ Set Reject",

        help_title_builder: "How to use the Builder",
        help_builder_1: "Click \"Add State\" to create a new state.",
        help_builder_2: "Right-click a state to set it as Start, Accept, or Reject.",
        help_builder_3: "Choose From/To states, fill in Read/Write/Move, then click \"Add Transition\".",
        help_builder_4: "Use \"Save Machine\" to save your work, then \"Open Simulator\" to run it.",
        help_builder_5: "Use \"Clear\" to delete everything and start over.",

        help_tooltip: "Help",

    
        help_title_simulator: "How to use the Simulator",
        help_simulator_1: "The machine you saved in the Builder loads here automatically.",
        help_simulator_2: "Type an input string onto the tape and click \"Load Input\".",
        help_simulator_3: "Use \"Step\" to run the machine one step at a time, or \"Run\" to execute it automatically.",
        help_simulator_4: "Watch the current state, head position, and tape update in real time.",
        help_simulator_5: "When the machine halts, you'll see whether the input was accepted or rejected. Click \"Reset\" to start over.",


        input_tape:"Input Tape",
        input_example:"Example: aabb",
        explain_mode:"Explain Mode",
        tape: "Tape",
        load_button:"Load Machine",
        step_button:"Step",
        run_button:"Run",
        reset_button:"Reset",
        current_state:"Current State",
        head_position: "Head Position",
        steps:"Steps",
        explanation_box: "Load a machine to begin.",
        machine_definition:"Machine Definition",
        tm_simulator:"Turing Machine Simulator",
         
        explain_loaded: "Machine loaded. Click \"Step\" or \"Run\".",
        explain_step: "State {from} read \"{symbol}\", wrote \"{write}\", moved {move}, and transitioned to {to}.",
        explain_accept: "The machine halted in state {state} — Accepted ✅",
        explain_reject: "The machine halted in state {state} — Rejected ❌",
        explain_no_machine: "Load a machine first.",
        explain_too_many_steps: "The machine exceeded the step limit without halting (possible infinite loop).",

        template_label: "Quick Templates:",
        template_none: "-- Select a template --",
        template_palindrome: "Palindrome Checker (a,b)",
        template_reverse: "Reverse String (a,b)",

        machine_info_title: "Machine Information",
        language_label: "Language",
        language_placeholder: "Example: L = { aⁿbⁿ }",
        description_label: "Description",
        description_placeholder: "Describe how your machine works...",
        author_label: "Author",
        author_placeholder: "Your name",

        machine_information: "Machine Information",
        open_simulator:"Open SImulator",
        clear_machine:"Clear",
        save_machine:"Save Machine",
        machine_json:"Machine JSON",
        machine_graph:"Machine Graph",
        transitions:"Transitions",
        machine_saved:"Machine Saved",
        machine_imported:"Machine Imported",

        // ---------- THEORY PAGE ----------

        theory_title: "Turing Machine Theory",
        theory_subtitle: "Learn the basic concepts of Turing Machines through simple explanations and examples.",

        theory_intro_title: "What is a Turing Machine?",
        theory_intro_text: "A Turing Machine is a theoretical model of computation consisting of an infinite tape, a read/write head, and a finite set of states. It forms the foundation of computation theory.",

        theory_parts_title: "Main Components",
        theory_parts_tape: "Tape: stores the input and output symbols.",
        theory_parts_head: "Head: reads, writes and moves across the tape.",
        theory_parts_states: "States: describe the current operation of the machine.",
        theory_parts_transition: "Transition function: determines the next action at every step.",

        theory_operation_title: "How does it work?",
        theory_operation_1: "Read the symbol under the head.",
        theory_operation_2: "Choose the matching transition.",
        theory_operation_3: "Write the new symbol.",
        theory_operation_4: "Move Left, Right or Stay.",
        theory_operation_5: "Change to the next state.",
        theory_operation_6: "Repeat until the machine halts.",

        theory_introduction_title:"Introduction",

        theory_example_title: "Example",
        theory_example_text: "For the language L = { aⁿbⁿ }, the machine marks each 'a' with 'X', finds the matching 'b' and marks it with 'Y'. When every symbol has been marked, the input is accepted.",

        theory_next_title: "Next Step",
        theory_next_text: "After understanding the theory, use the Builder to create your own machines and the Simulator to test them.",
        about_title:"About the Platform",

        about_subtitle:"Learn about the application, its features and educational purpose.",

        about_project_title:"The Project",

        about_project_text:"Turing Machine Studio is an interactive educational platform that helps students understand Turing Machines through visual construction, simulation and theoretical material.",

        about_goal_title:"Goal",

        about_goal_text:"The goal of this platform is to make learning Turing Machines easier and more interactive by combining theory, design and simulation in a single environment.",

        about_features_title:"Features",

        about_feature1:"Visual Turing Machine Builder",

        about_feature2:"Step-by-step Simulation",

        about_feature3:"Explain Mode",

        about_feature4:"Ready-to-use Templates",

        about_feature5:"Machine Import / Export",

        about_feature6:"Greek & English Language Support",

        about_tech_title:"Technologies",

        about_university_title:"University",

        about_university_text:"This application was developed as a university project for the Turing Machines course.",

        about_author_title:"Author",

        about_author_text:"The application was developed for educational purposes to help students better understand the theory and operation of Turing Machines.",

        // HELP

        help_title_about:"How to use this page",

        help_about_1:"Read information about the application and its purpose.",

        help_about_2:"Learn which technologies were used.",

        help_about_3:"Explore all the platform's features.",

        help_about_4:"Use the navigation bar to access the remaining sections.",

        examples_title: "Turing Machine Examples",

        examples_subtitle: "Explore ready-made Turing Machines and load them directly into the simulator.",

        difficulty_beginner: "Beginner",

        difficulty_intermediate: "Intermediate",

        difficulty_advanced: "Advanced",

        example_anbn: "Recognizes strings of the form aⁿbⁿ.",

        example_palindrome: "Checks whether a string is a palindrome.",

        example_reverse: "Reverses a string on the tape.",

        example_equal: "Recognizes strings of the form 0ⁿ1ⁿ.",

        load_example: "Load in Simulator",

        help_title_examples: "How to use the Examples",

        help_examples_1: "Choose one of the ready-made examples.",

        help_examples_2: "Click \"Load in Simulator\".",

        help_examples_3: "The machine will automatically open in the Simulator.",

        help_examples_4: "Try different input strings to observe the machine.",
        level_beginner:"Beginner",
        level_intermediate:"Intermediate",
        level_advanced:"Advanced",

        difficulty:"Difficulty:",

        example_ab_desc:"Recognizes strings of the form aⁿbⁿ.",
        example_pal_desc:"Checks whether a string is a palindrome.",
        example_reverse_desc:"Matches equal numbers of 0s followed by 1s.",
        example_01_desc:"Reverses a string on the tape.",

        load_simulator:"Load in Simulator",
            }

};


function applyLanguage(lang){

    document.querySelectorAll("[data-i18n]").forEach(el=>{

        const key = el.getAttribute("data-i18n");

        if(translations[lang] && translations[lang][key]){

            el.textContent = translations[lang][key];

        }

    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{

        const key = el.getAttribute("data-i18n-placeholder");

        if(translations[lang] && translations[lang][key]){

            el.placeholder = translations[lang][key];

        }

    });

    document.querySelectorAll("[data-i18n-title]").forEach(el=>{

        const key = el.getAttribute("data-i18n-title");

        if(translations[lang] && translations[lang][key]){

            el.title = translations[lang][key];

        }

    });

    document.documentElement.lang = lang;

    localStorage.setItem("preferredLang", lang);

    const elBtn = document.getElementById("langEL");
    const enBtn = document.getElementById("langEN");

    if(elBtn && enBtn){

        elBtn.classList.toggle("active", lang === "el");
        enBtn.classList.toggle("active", lang === "en");

    }

}


document.addEventListener("DOMContentLoaded", ()=>{

    const savedLang =
    localStorage.getItem("preferredLang") || "el";

    applyLanguage(savedLang);

    const elBtn = document.getElementById("langEL");
    const enBtn = document.getElementById("langEN");

    if(elBtn){

        elBtn.addEventListener("click", ()=> applyLanguage("el"));

    }

    if(enBtn){

        enBtn.addEventListener("click", ()=> applyLanguage("en"));

    }

    // ===================================
    // HELP MODAL (γενικό, δουλεύει σε όποια
    // σελίδα υπάρχουν τα helpButton/helpModal)
    // ===================================

    const helpButton = document.getElementById("helpButton");
    const helpModal = document.getElementById("helpModal");
    const closeHelp = document.getElementById("closeHelp");

    if(helpButton && helpModal){

        helpButton.addEventListener("click", ()=>{

            helpModal.style.display = "flex";

        });

    }

    if(closeHelp && helpModal){

        closeHelp.addEventListener("click", ()=>{

            helpModal.style.display = "none";

        });

    }

    if(helpModal){

        helpModal.addEventListener("click", (e)=>{

            if(e.target === helpModal){

                helpModal.style.display = "none";

            }

        });

    }

});