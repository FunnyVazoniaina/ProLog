
% Crime types
crime_type(assassinat).
crime_type(vol).
crime_type(escroquerie).

% Suspects
suspect(john).
suspect(mary).
suspect(alice).
suspect(bruno).
suspect(sophie).

% Facts grouped by predicate
% has_motive/2
has_motive(john, vol).
has_motive(mary, assassinat).
has_motive(alice, escroquerie).

% was_near_crime_scene/2
was_near_crime_scene(john, vol).
was_near_crime_scene(mary, assassinat).

% has_fingerprint_on_weapon/2
has_fingerprint_on_weapon(john, vol).
has_fingerprint_on_weapon(mary, assassinat).

% has_bank_transaction/2
has_bank_transaction(alice, escroquerie).
has_bank_transaction(bruno, escroquerie).

% owns_fake_identity/2
owns_fake_identity(sophie, escroquerie).

% Rules to determine guilt
is_guilty(Suspect, vol) :-
    has_motive(Suspect, vol),
    was_near_crime_scene(Suspect, vol),
    has_fingerprint_on_weapon(Suspect, vol).

is_guilty(Suspect, assassinat) :-
    has_motive(Suspect, assassinat),
    was_near_crime_scene(Suspect, assassinat),
    (has_fingerprint_on_weapon(Suspect, assassinat) ; eyewitness_identification(Suspect, assassinat)).

is_guilty(Suspect, escroquerie) :-
    (has_bank_transaction(Suspect, escroquerie) ; owns_fake_identity(Suspect, escroquerie)).