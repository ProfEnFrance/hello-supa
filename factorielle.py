def factorielle(n):
    """
    Calcule la factorielle d'un nombre n de manière récursive.

    Args:
        n: Un entier positif.

    Returns:
        La factorielle de n.
    """
    # Vérifie que n est un entier positif
    assert isinstance(n, int) and n >= 0, "n doit être un entier positif"

    # Cas de base
    if n == 0:
        return 1
    # Cas récursif
    else:
        return n * factorielle(n - 1)

# Vérifications avec assert
assert factorielle(4) == 24
assert factorielle(6) == 720
assert factorielle(7) == 5040

print("Tous les tests ont réussi !")
